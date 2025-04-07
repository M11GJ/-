// データベース接続とクエリ実行のためのユーティリティ関数
// 注: このファイルはデモ用のモックデータを提供します

// モックデータベース接続
export const initPool = () => {
  console.log('モックデータベース接続を初期化しました');
  return {
    connect: () => ({
      query: async () => ({ rows: [] }),
      release: () => {},
    }),
  };
};

// モッククエリ実行関数
export const query = async (text: string, params: any[] = []) => {
  console.log('モッククエリを実行:', text, params);
  return { rows: [] };
};

// ユーザーの履修済み科目を取得（モック）
export const fetchCourses = async (userId: string) => {
  console.log('ユーザーの履修科目を取得:', userId);

  // モックデータを返す
  return {
    completedCourses: [],
    plannedCourses: [],
  };
};

// 科目を履修済みリストに追加（モック）
export const addCompletedCourse = async (data: {
  courseCode: string;
  userId: string;
  grade?: string;
}) => {
  console.log('履修済み科目を追加:', data);
  return { success: true };
};

// 科目を履修予定リストに追加（モック）
export const addPlannedCourse = async (data: {
  courseCode: string;
  userId: string;
}) => {
  console.log('履修予定科目を追加:', data);
  return { success: true };
};

// 成績を更新（モック）
export const updateCourseGrade = async (data: {
  courseCode: string;
  userId: string;
  grade: string;
}) => {
  console.log('成績を更新:', data);
  return { success: true };
};

// 全科目リストを取得（モック）
export const fetchAllCourses = async () => {
  console.log('全科目リストを取得');
  return [];
};
