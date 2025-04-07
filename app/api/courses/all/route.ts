import { NextResponse } from 'next/server';

// 全科目リストを取得するAPI
export async function GET() {
  try {
    // モックデータを返す
    return NextResponse.json([]);
  } catch (error) {
    console.error('科目リストの取得に失敗しました:', error);
    return NextResponse.json(
      { error: '科目リストの取得に失敗しました' },
      { status: 500 }
    );
  }
}
