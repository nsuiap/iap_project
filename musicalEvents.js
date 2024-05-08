// 예시 이벤트 데이터
const events = [
  {
    title: "뮤지컬 제목 1",
    location: "서울",
    date: "2024-05-10",
    image: "IMG/event1.jpg",
  },
  {
    title: "뮤지컬 제목 2",
    location: "부산",
    date: "2024-06-15",
    image: "IMG/event2.jpg",
  },
  {
    title: "뮤지컬 제목 3",
    location: "인천",
    date: "2024-07-20",
    image: "IMG/event3.jpg",
  },
];

// 이벤트를 화면에 표시하는 함수
function displayEvents(filteredEvents) {
  const container = document.getElementById("eventsList");
  container.innerHTML = ""; // 리스트 초기화
  filteredEvents.forEach((event) => {
    const eventElement = `<div class="event">
          <img src="${event.image}" alt="Event Image" style="width: 100px; height: 100px; margin-right: 20px;">
          <div>
            <h3>${event.title}</h3>
            <p>장소: ${event.location}</p>
            <p>날짜: ${event.date}</p>
          </div>
          <button>티켓 예매</button>
        </div>`;
    container.innerHTML += eventElement;
  });
}

// 이벤트 검색 함수
function searchEvents() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchText) ||
      event.location.toLowerCase().includes(searchText)
  );
  displayEvents(filteredEvents);
}

// 페이지 로드 시 모든 이벤트 표시
window.onload = function () {
  displayEvents(events);
};
