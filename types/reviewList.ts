/**
 * @title : 리뷰 리스트 타입
 */

export type REVIEWS_TYPE = {
  message: string;
  responseTime: string;
  result: REVIEWS_IN_RESULT;
}

export type REVIEWS_IN_RESULT = {
  lastId: number;
  list: RESULT_IN_LIST[];
}

export type RESULT_IN_LIST = {
  review: LIST_IN_REVIEW;
  store: LIST_IN_STORE;
  user: LIST_IN_USER;
}

export type LIST_IN_REVIEW = {
  content: string;
  id: number;
  images: Array<string>;
  tags: Array<string>;
  title: string;
}

export type LIST_IN_STORE = {
  businessItem: string;
  jibunAddress: string;
  location: Array<number>;
  managementId: string;
  roadAddress: string;
  status: string;
  storeName: string;
}

export type LIST_IN_USER = {
  id: number;
  isFindFriends: boolean;
  nickname: string;
  profile: string;
}