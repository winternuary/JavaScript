// Post 인터페이스 정의: 각 게시글이 가져야 할 속성을 정의
interface Post {
  id: number; // 게시글 ID
  title: string; // 게시글 제목
  body: string; // 게시글 내용
  userId: number; // 게시글 작성자의 ID
  userName?: string; // 게시글 작성자의 이름 (optional, API 호출 후 추가됨)
}

// 게시글 및 작성자 데이터를 가져오는 비동기 함수
async function fetchPosts(): Promise<Post[]> {
  // 게시글 데이터를 가져오는 API 호출
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const posts = await postsResponse.json(); // JSON 데이터를 자바스크립트 객체로 변환

  // 작성자 데이터를 가져오는 API 호출
  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  const users = await usersResponse.json(); // JSON 데이터를 자바스크립트 객체로 변환

  // 각 게시글에 작성자 이름(userName)을 추가하는 부분
  const postsWithUserNames = posts.map((post: Post) => {
    // 해당 게시글의 작성자 ID와 일치하는 사용자를 찾음
    const user = users.find((user: any) => user.id === post.userId);

    // 찾은 사용자의 이름을 게시글에 추가 (없을 경우 'Unknown'으로 설정)
    return { ...post, userName: user ? user.name : "Unknown" };
  });

  // 작성자 이름이 추가된 게시글 목록을 반환
  return postsWithUserNames;
}

// 주어진 게시글 데이터를 사용하여 게시글 HTML 요소를 생성하는 함수
function createPostElement(post: Post): HTMLElement {
  // 게시글을 담을 div 요소 생성
  const postElement = document.createElement("div");
  postElement.className = "post"; // 스타일 적용을 위한 클래스 이름 지정

  // 게시글 제목을 담을 h2 요소 생성 및 설정
  const titleElement = document.createElement("h2");
  titleElement.textContent = post.title; // 제목 설정
  postElement.appendChild(titleElement); // 제목 요소를 게시글 요소에 추가

  // 작성자 이름을 담을 p 요소 생성 및 설정
  const userNameElement = document.createElement("p");
  userNameElement.textContent = `By: ${post.userName}`; // 작성자 이름 설정
  userNameElement.style.fontWeight = "bold"; // 굵게 표시
  userNameElement.style.marginBottom = "10px"; // 하단 여백 설정
  postElement.appendChild(userNameElement); // 작성자 요소를 게시글 요소에 추가

  // 게시글 내용을 담을 p 요소 생성 및 설정
  const bodyElement = document.createElement("p");
  bodyElement.textContent = post.body; // 게시글 내용 설정
  postElement.appendChild(bodyElement); // 내용 요소를 게시글 요소에 추가

  // 생성된 게시글 요소 반환
  return postElement;
}

// 게시글을 가져와 화면에 렌더링하는 비동기 함수
async function renderPosts(): Promise<void> {
  // 게시글을 삽입할 컨테이너 요소를 찾음
  const postsContainer = document.getElementById("posts-container");
  if (!postsContainer) return; // 컨테이너가 없는 경우 함수 종료

  // API를 통해 게시글 데이터를 가져옴
  const posts = await fetchPosts();

  // 각 게시글 데이터를 순회하며 화면에 표시
  posts.forEach((post) => {
    // 개별 게시글 요소를 생성
    const postElement = createPostElement(post);

    // 생성된 게시글 요소를 컨테이너에 추가
    postsContainer.appendChild(postElement);
  });
}

// 문서가 완전히 로드된 후, 게시글을 렌더링하는 함수를 호출
document.addEventListener("DOMContentLoaded", renderPosts);
