'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { sampleUserData } from '@/lib/data';

// 進捗率の計算
const calculateProgress = (earned: number, required: number) => {
  return Math.min(Math.round((earned / required) * 100), 100);
};

export default function UserProgressContent() {
  const [activeTab, setActiveTab] = useState('completed');

  // サンプルデータを使用
  const { completedCourses, plannedCourses, progress } = sampleUserData;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">あなたの履修状況</h2>

      <Card>
        <CardHeader>
          <CardTitle>卒業要件の達成状況</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">総取得単位数</span>
              <span className="font-semibold">
                {progress.totalCredits.earned} /{' '}
                {progress.totalCredits.required} 単位
              </span>
            </div>
            <Progress
              value={calculateProgress(
                progress.totalCredits.earned,
                progress.totalCredits.required
              )}
              className="h-2"
            />
            <p className="mt-2 text-sm text-gray-600">
              卒業までにあと{' '}
              {progress.totalCredits.required - progress.totalCredits.earned}{' '}
              単位が必要です。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">カテゴリー別進捗</h3>

              {Object.entries(progress.categories).map(([key, category]) => (
                <div key={key}>
                  <div className="flex justify-between mb-1">
                    <span>
                      {key === 'general'
                        ? '総合科目'
                        : key === 'departmentBasic'
                        ? '学科基礎科目'
                        : key === 'program'
                        ? 'プログラム科目'
                        : key === 'exercise'
                        ? '演習科目'
                        : '他学科専門科目'}
                    </span>
                    <span>
                      {category.earned} / {category.required} 単位
                    </span>
                  </div>
                  <Progress
                    value={calculateProgress(
                      category.earned,
                      category.required
                    )}
                    className="h-2"
                  />
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">GPA</h3>
              <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">GPA</h3>
                  <div className="text-2xl font-bold text-primary">
                    {progress.gpa.toFixed(2)}
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>成績評価: 秀(4点)、優(3点)、良(2点)、可(1点)、不可(0点)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>履修科目一覧</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Button
              variant={activeTab === 'completed' ? 'default' : 'outline'}
              onClick={() => setActiveTab('completed')}
            >
              履修済み科目
            </Button>
            <Button
              variant={activeTab === 'planned' ? 'default' : 'outline'}
              onClick={() => setActiveTab('planned')}
            >
              履修予定科目
            </Button>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>科目コード</TableHead>
                  <TableHead>科目名</TableHead>
                  <TableHead>区分</TableHead>
                  <TableHead className="text-center">単位数</TableHead>
                  <TableHead className="text-center">学期</TableHead>
                  {activeTab === 'completed' && (
                    <TableHead className="text-center">成績</TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeTab === 'completed'
                  ? completedCourses.map((course, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-sm">
                          {course.code}
                        </TableCell>
                        <TableCell>
                          {course.name}
                          {course.required && (
                            <Badge
                              variant="outline"
                              className="ml-2 text-primary border-primary"
                            >
                              必修
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{course.category}</TableCell>
                        <TableCell className="text-center">
                          {course.credits}
                        </TableCell>
                        <TableCell className="text-center">
                          {course.semester}
                        </TableCell>
                        <TableCell className="text-center font-semibold">
                          {course.grade}
                        </TableCell>
                      </TableRow>
                    ))
                  : plannedCourses.map((course, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-sm">
                          {course.code}
                        </TableCell>
                        <TableCell>
                          {course.name}
                          {course.required && (
                            <Badge
                              variant="outline"
                              className="ml-2 text-primary border-primary"
                            >
                              必修
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{course.category}</TableCell>
                        <TableCell className="text-center">
                          {course.credits}
                        </TableCell>
                        <TableCell className="text-center">
                          {course.semester}
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
