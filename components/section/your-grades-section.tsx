'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function YourGradesSection() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSemester, setSelectedSemester] = useState('all');

  // 成績評価と評価点のマッピング
  const gradePoints = {
    秀: 4,
    優: 3,
    良: 2,
    可: 1,
    不可: 0,
    '': 0,
  };

  // サンプルデータ - 実際のアプリケーションではユーザーの実際の成績データを使用
  const grades = [
    {
      code: '31-1-11-21-01',
      name: '周南Well-being創生入門',
      year: 1,
      semester: '前期',
      credits: 2,
      grade: '優',
      gp: 3,
    },
    {
      code: '31-1-11-21-02',
      name: '教養スポーツ実習Ⅰ',
      year: 1,
      semester: '前期',
      credits: 1,
      grade: '優',
      gp: 3,
    },
    {
      code: '31-1-14-21-01',
      name: '情報リテラシー',
      year: 1,
      semester: '前期',
      credits: 2,
      grade: '良',
      gp: 2,
    },
    {
      code: '31-1-14-21-02',
      name: 'Python入門',
      year: 1,
      semester: '前期',
      credits: 2,
      grade: '優',
      gp: 3,
    },
    {
      code: '31-2-21-21-01',
      name: '情報科学概論',
      year: 1,
      semester: '前期',
      credits: 2,
      grade: '良',
      gp: 2,
    },
    {
      code: '31-2-21-21-02',
      name: '実社会とデータ分析',
      year: 1,
      semester: '前期',
      credits: 2,
      grade: '優',
      gp: 3,
    },
    {
      code: '31-1-11-21-03',
      name: '持続可能な社会とダイバーシティ',
      year: 1,
      semester: '後期',
      credits: 2,
      grade: '良',
      gp: 2,
    },
    {
      code: '31-1-14-21-03',
      name: 'コミュニケーション英語Ⅰ',
      year: 1,
      semester: '後期',
      credits: 1,
      grade: '優',
      gp: 3,
    },
    {
      code: '31-2-21-21-03',
      name: '計算機概論',
      year: 1,
      semester: '後期',
      credits: 2,
      grade: '可',
      gp: 1,
    },
    {
      code: '31-2-21-21-04',
      name: 'Python応用',
      year: 1,
      semester: '後期',
      credits: 2,
      grade: '良',
      gp: 2,
    },
    {
      code: '31-2-21-21-05',
      name: 'データ分析基礎',
      year: 1,
      semester: '後期',
      credits: 2,
      grade: '優',
      gp: 3,
    },
    {
      code: '31-1-14-21-04',
      name: 'データサイエンス入門',
      year: 1,
      semester: '後期',
      credits: 2,
      grade: '優',
      gp: 3,
    },
    {
      code: '31-1-14-21-05',
      name: '情報倫理',
      year: 1,
      semester: '後期',
      credits: 2,
      grade: '良',
      gp: 2,
    },
  ];

  // 年次ごとのデータをフィルタリング
  const filteredGrades = grades.filter((grade) => {
    if (selectedYear !== 'all' && grade.year !== Number.parseInt(selectedYear))
      return false;
    if (selectedSemester !== 'all' && grade.semester !== selectedSemester)
      return false;
    return true;
  });

  // GPA計算
  const calculateGPA = (grades) => {
    if (grades.length === 0) return 0;

    const totalPoints = grades.reduce(
      (sum, grade) => sum + grade.gp * grade.credits,
      0
    );
    const totalCredits = grades.reduce((sum, grade) => sum + grade.credits, 0);

    return totalPoints / totalCredits;
  };

  // 年次ごとのGPA
  const yearlyGPA = {
    1: calculateGPA(grades.filter((grade) => grade.year === 1)),
    2: calculateGPA(grades.filter((grade) => grade.year === 2)),
    3: calculateGPA(grades.filter((grade) => grade.year === 3)),
    4: calculateGPA(grades.filter((grade) => grade.year === 4)),
  };

  // 累積GPA
  const cumulativeGPA = calculateGPA(grades);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">成績一覧</h2>

      <Card>
        <CardHeader>
          <CardTitle>GPA概要</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">累積GPA</h3>
              <div className="flex items-center justify-center">
                <div className="text-5xl font-bold text-primary">
                  {cumulativeGPA.toFixed(2)}
                </div>
              </div>
              <p className="mt-4 text-sm text-center text-gray-600">
                累積GPAは、これまでに履修したすべての科目の成績を反映しています。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">年次別GPA</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <span>1年次</span>
                  <span className="font-semibold">
                    {yearlyGPA[1].toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <span>2年次</span>
                  <span className="font-semibold">
                    {yearlyGPA[2] ? yearlyGPA[2].toFixed(2) : '-'}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <span>3年次</span>
                  <span className="font-semibold">
                    {yearlyGPA[3] ? yearlyGPA[3].toFixed(2) : '-'}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <span>4年次</span>
                  <span className="font-semibold">
                    {yearlyGPA[4] ? yearlyGPA[4].toFixed(2) : '-'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold mb-2">成績評価基準</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <div className="p-2 bg-white dark:bg-gray-900 rounded text-center">
                <div className="font-bold">秀</div>
                <div className="text-sm">90-100点</div>
                <div className="text-sm">GP: 4.0</div>
              </div>
              <div className="p-2 bg-white dark:bg-gray-900 rounded text-center">
                <div className="font-bold">優</div>
                <div className="text-sm">80-89点</div>
                <div className="text-sm">GP: 3.0</div>
              </div>
              <div className="p-2 bg-white dark:bg-gray-900 rounded text-center">
                <div className="font-bold">良</div>
                <div className="text-sm">70-79点</div>
                <div className="text-sm">GP: 2.0</div>
              </div>
              <div className="p-2 bg-white dark:bg-gray-900 rounded text-center">
                <div className="font-bold">可</div>
                <div className="text-sm">60-69点</div>
                <div className="text-sm">GP: 1.0</div>
              </div>
              <div className="p-2 bg-white dark:bg-gray-900 rounded text-center">
                <div className="font-bold">不可</div>
                <div className="text-sm">0-59点</div>
                <div className="text-sm">GP: 0.0</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>成績詳細</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">年次</label>
              <select
                className="p-2 border rounded"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="all">すべて</option>
                <option value="1">1年次</option>
                <option value="2">2年次</option>
                <option value="3">3年次</option>
                <option value="4">4年次</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">学期</label>
              <select
                className="p-2 border rounded"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
              >
                <option value="all">すべて</option>
                <option value="前期">前期</option>
                <option value="後期">後期</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>科目コード</TableHead>
                  <TableHead>科目名</TableHead>
                  <TableHead>年次</TableHead>
                  <TableHead>学期</TableHead>
                  <TableHead className="text-center">単位数</TableHead>
                  <TableHead className="text-center">評価</TableHead>
                  <TableHead className="text-center">GP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGrades.map((grade, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-sm">
                      {grade.code}
                    </TableCell>
                    <TableCell>{grade.name}</TableCell>
                    <TableCell>{grade.year}年次</TableCell>
                    <TableCell>{grade.semester}</TableCell>
                    <TableCell className="text-center">
                      {grade.credits}
                    </TableCell>
                    <TableCell className="text-center font-semibold">
                      {grade.grade}
                    </TableCell>
                    <TableCell className="text-center">
                      {grade.gp.toFixed(1)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 flex justify-between">
            <div>
              <span className="text-sm text-gray-600">
                表示: {filteredGrades.length}科目
              </span>
            </div>
            <div>
              <span className="font-semibold">
                合計単位数:{' '}
                {filteredGrades.reduce((sum, grade) => sum + grade.credits, 0)}
                単位
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>成績分布</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">評価別分布</h3>
              <div className="space-y-2">
                {['秀', '優', '良', '可', '不可'].map((grade) => {
                  const count = grades.filter((g) => g.grade === grade).length;
                  const percentage =
                    grades.length > 0 ? (count / grades.length) * 100 : 0;

                  return (
                    <div key={grade} className="space-y-1">
                      <div className="flex justify-between">
                        <span>{grade}</span>
                        <span>
                          {count}科目 ({percentage.toFixed(1)}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">科目区分別成績</h3>
              <div className="space-y-4">
                <div className="p-3 border rounded">
                  <div className="flex justify-between mb-1">
                    <span>総合科目</span>
                    <span className="font-semibold">GPA: 3.67</span>
                  </div>
                  <div className="text-sm">取得単位: 12/19</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex justify-between mb-1">
                    <span>学科基礎科目</span>
                    <span className="font-semibold">GPA: 3.25</span>
                  </div>
                  <div className="text-sm">取得単位: 12/20</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex justify-between mb-1">
                    <span>プログラム科目</span>
                    <span className="font-semibold">GPA: 0.00</span>
                  </div>
                  <div className="text-sm">取得単位: 0/22</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>成績証明書</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            成績証明書は、大学の公式な成績記録です。就職活動や進学の際に必要となります。
          </p>
          <div className="flex gap-4">
            <Button>成績証明書をダウンロード</Button>
            <Button variant="outline">成績証明書を発行申請</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
