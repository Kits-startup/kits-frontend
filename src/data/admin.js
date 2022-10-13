export const tabList = [
  {
    label: "관리자 관리",
    id: "management",
    vBox: "0 0 21 28",
    ds: [
      "M18.4922 9.625H17.2422V7.125C17.2422 3.675 14.4422 0.875 10.9922 0.875C7.54219 0.875 4.74219 3.675 4.74219 7.125V9.625H3.49219C2.11719 9.625 0.992188 10.75 0.992188 12.125V24.625C0.992188 26 2.11719 27.125 3.49219 27.125H18.4922C19.8672 27.125 20.9922 26 20.9922 24.625V12.125C20.9922 10.75 19.8672 9.625 18.4922 9.625ZM7.24219 7.125C7.24219 5.05 8.91719 3.375 10.9922 3.375C13.0672 3.375 14.7422 5.05 14.7422 7.125V9.625H7.24219V7.125ZM18.4922 24.625H3.49219V12.125H18.4922V24.625ZM10.9922 20.875C12.3672 20.875 13.4922 19.75 13.4922 18.375C13.4922 17 12.3672 15.875 10.9922 15.875C9.61719 15.875 8.49219 17 8.49219 18.375C8.49219 19.75 9.61719 20.875 10.9922 20.875Z",
    ],
    subList: [
      { label: "관리자 목록", id: "list" },
      { label: "관리자 등록", id: "register" },
    ],
  },
  {
    label: "회원 관리",
    id: "user",
    vBox: "0 0 33 33",
    ds: [
      "M12.375 18.9062C9.1575 18.9062 2.75 20.515 2.75 23.7188V26.125H22V23.7188C22 20.515 15.5925 18.9062 12.375 18.9062ZM5.9675 23.375C7.1225 22.5775 9.91375 21.6562 12.375 21.6562C14.8362 21.6562 17.6275 22.5775 18.7825 23.375H5.9675ZM12.375 16.5C15.0287 16.5 17.1875 14.3412 17.1875 11.6875C17.1875 9.03375 15.0287 6.875 12.375 6.875C9.72125 6.875 7.5625 9.03375 7.5625 11.6875C7.5625 14.3412 9.72125 16.5 12.375 16.5ZM12.375 9.625C13.5162 9.625 14.4375 10.5463 14.4375 11.6875C14.4375 12.8288 13.5162 13.75 12.375 13.75C11.2337 13.75 10.3125 12.8288 10.3125 11.6875C10.3125 10.5463 11.2337 9.625 12.375 9.625ZM22.055 18.9888C23.65 20.1438 24.75 21.6838 24.75 23.7188V26.125H30.25V23.7188C30.25 20.9412 25.4375 19.36 22.055 18.9888ZM20.625 16.5C23.2787 16.5 25.4375 14.3412 25.4375 11.6875C25.4375 9.03375 23.2787 6.875 20.625 6.875C19.8825 6.875 19.195 7.05375 18.5625 7.35625C19.4287 8.58 19.9375 10.0788 19.9375 11.6875C19.9375 13.2962 19.4287 14.795 18.5625 16.0187C19.195 16.3212 19.8825 16.5 20.625 16.5Z",
    ],
    subList: [
      { label: "공지사항 목록", id: "list" },
      { label: "공지사항 등록", id: "register" },
    ],
  },
  {
    label: "승인 관리",
    id: "approval",
    vBox: "0 0 29 29",
    ds: [
      "M18.2191 11.5853L14.4974 15.307L10.7757 11.5853L9.0599 13.2891L14.4974 18.7266L19.9349 13.2891L18.2191 11.5853ZM14.4974 2.41406C7.8274 2.41406 2.41406 7.8274 2.41406 14.4974C2.41406 21.1674 7.8274 26.5807 14.4974 26.5807C21.1674 26.5807 26.5807 21.1674 26.5807 14.4974C26.5807 7.8274 21.1674 2.41406 14.4974 2.41406ZM14.4974 24.1641C9.15656 24.1641 4.83073 19.8382 4.83073 14.4974C4.83073 9.15656 9.15656 4.83073 14.4974 4.83073C19.8382 4.83073 24.1641 9.15656 24.1641 14.4974C24.1641 19.8382 19.8382 24.1641 14.4974 24.1641Z",
    ],
    subList: [
      { label: "회원 목록", id: "user_list" },
      { label: "승인 목록", id: "approval_list" },
    ],
  },
  {
    label: "공고 관리",
    id: "job-opening",
    vBox: "0 0 31 31",
    ds: [
      "M9.04167 20.6693H18.0833V23.2526H9.04167V20.6693ZM9.04167 15.5026H21.9583V18.0859H9.04167V15.5026ZM9.04167 10.3359H21.9583V12.9193H9.04167V10.3359ZM24.5417 5.16927H19.1425C18.6 3.67094 17.1792 2.58594 15.5 2.58594C13.8208 2.58594 12.4 3.67094 11.8575 5.16927H6.45833C6.2775 5.16927 6.10958 5.18219 5.94167 5.22094C5.43792 5.32427 4.98583 5.5826 4.63708 5.93135C4.40458 6.16385 4.21083 6.44802 4.08167 6.75802C3.9525 7.0551 3.875 7.39094 3.875 7.7526V25.8359C3.875 26.1847 3.9525 26.5334 4.08167 26.8434C4.21083 27.1534 4.40458 27.4247 4.63708 27.6701C4.98583 28.0189 5.43792 28.2772 5.94167 28.3805C6.10958 28.4064 6.2775 28.4193 6.45833 28.4193H24.5417C25.9625 28.4193 27.125 27.2568 27.125 25.8359V7.7526C27.125 6.33177 25.9625 5.16927 24.5417 5.16927ZM15.5 4.84635C16.0296 4.84635 16.4688 5.28552 16.4688 5.8151C16.4688 6.34469 16.0296 6.78385 15.5 6.78385C14.9704 6.78385 14.5312 6.34469 14.5312 5.8151C14.5312 5.28552 14.9704 4.84635 15.5 4.84635ZM24.5417 25.8359H6.45833V7.7526H24.5417V25.8359Z",
    ],
    subList: [
      { label: "채용 공고 목록", id: "post_list" },
      { label: "카테고리 관리", id: "category" },
      { label: "리뷰 관리", id: "review" },
    ],
  },
  {
    label: "결제 관리",
    id: "payment",
    vBox: "0 0 24 20",
    ds: [
      "M21.333 0.664062H2.66634C1.37134 0.664062 0.344674 1.7024 0.344674 2.9974L0.333008 16.9974C0.333008 18.2924 1.37134 19.3307 2.66634 19.3307H21.333C22.628 19.3307 23.6663 18.2924 23.6663 16.9974V2.9974C23.6663 1.7024 22.628 0.664062 21.333 0.664062ZM21.333 16.9974H2.66634V9.9974H21.333V16.9974ZM21.333 5.33073H2.66634V2.9974H21.333V5.33073Z",
    ],
    subList: [{ label: "결제 내역", id: "list" }],
  },
  {
    label: "공지 관리",
    id: "notice",
    vBox: "0 0 31 31",
    ds: [
      "M24.5417 6.45833V18.0833H18.0833V24.5417H6.45833V6.45833H24.5417ZM24.5417 3.875H6.45833C5.0375 3.875 3.875 5.0375 3.875 6.45833V24.5417C3.875 25.9625 5.0375 27.125 6.45833 27.125H19.375L27.125 19.375V6.45833C27.125 5.0375 25.9625 3.875 24.5417 3.875ZM15.5 18.0833H9.04167V15.5H15.5V18.0833ZM21.9583 12.9167H9.04167V10.3333H21.9583V12.9167Z",
    ],
    subList: [
      { label: "공고 승인 목록", id: "post_list" },
      { label: "리뷰 승인 목록", id: "review_list" },
    ],
  },
  {
    label: "배너 관리",
    id: "banner",
    vBox: "0 0 30 30",
    ds: [
      "M25 5H5C3.625 5 2.5 6.125 2.5 7.5V22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM5 22.5V7.5H10V22.5H5ZM12.5 22.5V7.5H17.5V22.5H12.5ZM25 22.5H20V7.5H25V22.5Z",
    ],
    subList: [
      { label: "배너 목록", id: "list" },
      { label: "배너 등록", id: "register" },
    ],
  },
  {
    label: "문의 관리",
    id: "qna",
    vBox: "0 0 31 31",
    ds: [
      "M25.8359 2.58594H5.16927C3.74844 2.58594 2.58594 3.74844 2.58594 5.16927V28.4193L7.7526 23.2526H25.8359C27.2568 23.2526 28.4193 22.0901 28.4193 20.6693V5.16927C28.4193 3.74844 27.2568 2.58594 25.8359 2.58594ZM25.8359 20.6693H6.68052L5.16927 22.1805V5.16927H25.8359V20.6693ZM9.04427 11.6276H11.6276V14.2109H9.04427V11.6276ZM19.3776 11.6276H21.9609V14.2109H19.3776V11.6276ZM14.2109 11.6276H16.7943V14.2109H14.2109V11.6276Z",
    ],
    subList: [{ label: "문의 목록", id: "list" }],
  },
];
