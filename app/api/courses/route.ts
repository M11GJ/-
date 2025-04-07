import { NextResponse } from 'next/server';

// 履修科目一覧を取得するAPI
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'ユーザーIDが必要です' },
        { status: 400 }
      );
    }

    // モックデータを返す
    return NextResponse.json({
      completedCourses: [],
      plannedCourses: [],
    });
  } catch (error) {
    console.error('履修科目の取得に失敗しました:', error);
    return NextResponse.json(
      { error: '履修科目の取得に失敗しました' },
      { status: 500 }
    );
  }
}

// 履修科目を追加するAPI
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, courseCode, status, grade } = body;

    if (!userId || !courseCode || !status) {
      return NextResponse.json(
        { error: '必須パラメータが不足しています' },
        { status: 400 }
      );
    }

    // モック成功レスポンスを返す
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('履修科目の追加に失敗しました:', error);
    return NextResponse.json(
      { error: '履修科目の追加に失敗しました' },
      { status: 500 }
    );
  }
}

// 成績を更新するAPI
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { userId, courseCode, grade } = body;

    if (!userId || !courseCode || !grade) {
      return NextResponse.json(
        { error: '必須パラメータが不足しています' },
        { status: 400 }
      );
    }

    // モック成功レスポンスを返す
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('成績の更新に失敗しました:', error);
    return NextResponse.json(
      { error: '成績の更新に失敗しました' },
      { status: 500 }
    );
  }
}
