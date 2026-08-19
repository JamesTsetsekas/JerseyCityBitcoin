(function (root, factory) {
  var api = factory();

  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }

  if (root && root.document) {
    api.updateUpcomingEvents(root.document);
    api.enablePastEventDisclosures(root.document);
  }
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';

  var SITE_TIME_ZONE = 'America/New_York';
  var EVENT_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

  function dateKeyInTimeZone(date, timeZone) {
    var values = {};
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(date);

    parts.forEach(function (part) {
      if (part.type !== 'literal') values[part.type] = part.value;
    });

    return values.year + '-' + values.month + '-' + values.day;
  }

  function getUpcomingState(eventDateKeys, now) {
    var today = dateKeyInTimeZone(now || new Date(), SITE_TIME_ZONE);
    var hidden = eventDateKeys.map(function (eventDate) {
      return EVENT_DATE_PATTERN.test(eventDate) && eventDate < today;
    });
    var visibleCount = hidden.filter(function (isHidden) {
      return !isHidden;
    }).length;

    return {
      hidden: hidden,
      visibleCount: visibleCount,
      showEmpty: visibleCount === 0,
    };
  }

  function updateUpcomingEvents(document, now) {
    document.querySelectorAll('[data-upcoming-events]').forEach(function (container) {
      var dateElements = Array.from(
        container.querySelectorAll('.event-date[data-event-date]')
      );
      var state = getUpcomingState(
        dateElements.map(function (element) {
          return element.dataset.eventDate;
        }),
        now
      );

      dateElements.forEach(function (element, index) {
        var card = element.closest('.Poster');
        if (card) card.hidden = state.hidden[index];
      });

      var emptyState = container.querySelector('[data-upcoming-empty]');
      if (emptyState) emptyState.hidden = !state.showEmpty;
    });
  }

  // Some browser/assistive-technology combinations do not dispatch the native
  // summary activation for keyboard input once the control is heavily styled.
  // Preserve the native details element and provide the expected key behavior.
  function handlePastEventsKeydown(event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    var details = event.currentTarget.closest('details');
    if (!details) return;

    event.preventDefault();
    details.open = !details.open;
  }

  function enablePastEventDisclosures(document) {
    document.querySelectorAll('summary.PastEvents-summary').forEach(function (summary) {
      summary.addEventListener('keydown', handlePastEventsKeydown);
    });
  }

  return {
    SITE_TIME_ZONE: SITE_TIME_ZONE,
    dateKeyInTimeZone: dateKeyInTimeZone,
    getUpcomingState: getUpcomingState,
    updateUpcomingEvents: updateUpcomingEvents,
    handlePastEventsKeydown: handlePastEventsKeydown,
    enablePastEventDisclosures: enablePastEventDisclosures,
  };
});
