'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import {
  policies,
  semesterSystem,
  graduationRequirements,
  programs,
  sampleUserData,
} from '@/lib/data';

// 進捗率の計算
const calculateProgress = (earned: number, required: number) => {
  return Math.min(Math.round((earned / required) * 100), 100);
};

// ポリシーセクション
export function PolicyContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">情報科学部情報科学科 3つのポリシー</h2>
      <p>
        情報科学部は、学部教育の質と方向性を確保・公開するため、ディプロマ・ポリシー、カリキュラム・ポリシー、アドミッション・ポリシーの3つを制定しています。
      </p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="admission">
          <AccordionTrigger className="text-lg font-semibold">
            {policies.admission.title}
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  情報科学部のカリキュラムの実施に際し、以下のアドミッション・ポリシーを満たす学生を広く募集し、受け入れます。
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  {policies.admission.items.map((item, index) => (
                    <li key={index}>
                      <span className="font-semibold text-red-700">
                        AP{index + 1}
                      </span>{' '}
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="curriculum">
          <AccordionTrigger className="text-lg font-semibold">
            {policies.curriculum.title}
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  ディプロマ・ポリシーを満たす人材を輩出するために、情報科学部は以下のカリキュラム・ポリシーに従って教育課程を編成し教育を実施していきます。
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  {policies.curriculum.items.map((item, index) => (
                    <li key={index}>
                      <span className="font-semibold text-red-700">
                        CP{index + 1}
                      </span>{' '}
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="diploma">
          <AccordionTrigger className="text-lg font-semibold">
            {policies.diploma.title}
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  情報科学部は、定められた年限を在学し、所定の単位数を取得し、総合科目及び3つのプログラムでの学修を通して、以下を修得したものに学士(情報科学)の学位を授与します。
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  {policies.diploma.items.map((item, index) => (
                    <li key={index}>
                      <span className="font-semibold text-red-700">
                        {item.split(']')[0]}]
                      </span>
                      {item.split(']')[1]}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education">
          <AccordionTrigger className="text-lg font-semibold">
            {policies.education.title}
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6">
                <ul className="ml-6 space-y-2 list-disc">
                  {policies.education.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

// 学期セクション
export function SemesterContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">情報科学部における学期の考え方</h2>

      <Card>
        <CardHeader>
          <CardTitle>{semesterSystem.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{semesterSystem.description}</p>

          <div className="grid gap-6 md:grid-cols-2">
            {semesterSystem.types.map((type, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50">
                <h3 className="mb-2 text-lg font-semibold">{type.name}</h3>
                <p>{type.description}</p>
              </div>
            ))}
          </div>

          <div className="p-4 mt-6 border rounded-lg bg-blue-50">
            <p>{semesterSystem.note}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// 卒業要件セクション
export function GraduationContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">情報科学部情報科学科 卒業要件</h2>

      <Card>
        <CardHeader>
          <CardTitle>卒業要件</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            本学部の卒業要件は4年以上在籍し、以下の1.および2.に示す要件を満たす合計
            {graduationRequirements.totalCredits}
            単位を修得し、かつ3.を満たすことである。なお履修登録においては、情報科学部情報科学科授業科目表を必ず確認すること。
          </p>

          <ol className="ml-6 space-y-6 list-decimal">
            <li>
              <div className="font-semibold">総合科目</div>
              <p>
                必修科目{graduationRequirements.categories[0].required}
                単位を修得すること。
              </p>
            </li>
            <li>
              <div className="font-semibold">専門科目</div>
              <ol className="ml-6 mt-2 space-y-4 list-[lower-alpha]">
                <li>
                  <div className="font-semibold">
                    学科基礎科目およびプログラム科目（要件合計80単位）
                  </div>
                  <p>
                    学科基礎科目およびプログラム科目の中から以下の2-1-1および2-1-2に示す要件を満たす80単位を修得すること。
                  </p>
                  <ol className="ml-6 mt-2 space-y-2 list-[lower-roman]">
                    <li>
                      <div className="font-semibold">
                        学科基礎科目（要件合計
                        {graduationRequirements.categories[1].required}単位）
                      </div>
                      <p>
                        必修科目16単位を修得すること。実践英語（3科目）から4単位修得すること。
                      </p>
                    </li>
                    <li>
                      <div className="font-semibold">
                        プログラム科目（要件合計
                        {graduationRequirements.categories[2].required}単位）
                      </div>
                      <p>
                        下記に示す三つのプログラムから、最低1つのプログラムを履修すること。
                      </p>
                      <p>
                        各プログラムの履修にあたっては、必修科目を含む
                        {graduationRequirements.categories[2].required}
                        単位を修得すること。
                      </p>
                      <ul className="ml-6 mt-2 space-y-1 list-disc">
                        {programs.map((program, index) => (
                          <li key={index}>
                            ①{program.name}プログラム（{program.shortName}）
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  <div className="font-semibold">
                    演習科目（要件合計
                    {graduationRequirements.categories[3].required}単位）
                  </div>
                  <p>
                    演習科目から必修科目
                    {graduationRequirements.categories[3].required}
                    単位を修得すること。
                  </p>
                </li>
                <li>
                  <div className="font-semibold">
                    他学科専門科目（要件合計
                    {graduationRequirements.categories[4].required}単位）
                  </div>
                  <p>
                    他学科専門科目から
                    {graduationRequirements.categories[4].required}
                    単位を修得すること。
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <div className="font-semibold">卒業論文</div>
              <p>{graduationRequirements.thesis}</p>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}

// 授業科目表セクション
export function CourseTableContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">情報科学部情報科学科 授業科目表</h2>
      <p>授業科目表の詳細は準備中です。</p>
    </div>
  );
}

// 専門ゼミセクション
export function SeminarContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        専門ゼミ1, 専門ゼミ2, 卒業研究, 卒業論文について
      </h2>
      <p>専門ゼミと卒業研究に関する詳細は準備中です。</p>
    </div>
  );
}

// 履修モデルセクション
export function CurriculumModelContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">履修モデルについて</h2>
      <p>履修モデルの詳細は準備中です。</p>
    </div>
  );
}

// ナンバリングセクション
export function NumberingContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        情報科学部情報科学科 科目ナンバリング
      </h2>
      <p>科目ナンバリングの詳細は準備中です。</p>
    </div>
  );
}

// 教職課程セクション
export function TeachingContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">教職課程について</h2>
      <p>教職課程の詳細は準備中です。</p>
    </div>
  );
}

// AI教育プログラムセクション
export function AIProgramContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        数理・データサイエンス・AI教育プログラム認定制度
      </h2>
      <p>
        数理・データサイエンス・AI教育プログラム認定制度の詳細は準備中です。
      </p>
    </div>
  );
}

// ユーザー履修状況セクション
export function UserProgressContent() {
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

// ユーザー成績一覧セクション
export function UserGradesContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">成績一覧</h2>
      <p>成績一覧の詳細は準備中です。</p>
    </div>
  );
}

// ユーザー履修計画セクション
export function UserPlanContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">履修計画</h2>
      <p>履修計画の詳細は準備中です。</p>
    </div>
  );
}

// ユーザー卒業要件チェックセクション
export function UserRequirementsContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">卒業要件チェック</h2>
      <p>卒業要件チェックの詳細は準備中です。</p>
    </div>
  );
}

// ホームページコンテンツ
export function HomeContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="handbook-card border-2 border-primary/20 shadow-md h-full">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-bold text-primary">
                    2025年度 情報科学部便覧
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    情報科学部の教育方針、カリキュラム、卒業要件などの詳細情報
                  </p>
                </div>

                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg mb-6 border border-primary/20">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    重要なお知らせ
                  </h3>
                  <ul className="space-y-2 ml-4 list-disc">
                    <li>2025年度入学生向けカリキュラムが確定しました</li>
                    <li>
                      3年次第2クオーターは遠隔授業のみの設計となっています
                    </li>
                    <li>
                      数理・データサイエンス・AI教育プログラム認定制度について更新しました
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    情報科学部の特徴
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    情報科学部では、データサイエンス、情報エンジニアリング、ビジネスアナリティクスの3つのプログラムを用意し、
                    学生が自分の興味や将来の目標に合わせて学びを深められるカリキュラムを提供しています。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    また、3年次からの専門ゼミでは、少人数制の指導により、実践的な課題解決能力を養います。
                    卒業研究では地域に関連したテーマを研究することで、地域社会の持続的な発展に貢献できる人材を育成します。
                  </p>
                </div>

                <div className="mt-auto">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    便覧の使い方
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    左側のメニューから各セクションを選択して、詳細情報をご覧ください。
                    モバイル端末では、画面上部のメニューボタンからナビゲーションを開くことができます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="handbook-card border-2 border-primary/20 shadow-md h-full">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">
                プログラム概要
              </h3>

              <div className="space-y-4">
                {programs.map((program) => (
                  <div
                    key={program.id}
                    className="p-3 bg-secondary rounded-md border border-primary/10"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded">
                        {program.shortName}
                      </span>
                      <span className="font-semibold">{program.name}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {program.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  学年暦
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>前期授業開始</span>
                    <span className="font-medium">4月10日</span>
                  </div>
                  <div className="flex justify-between">
                    <span>第1・2クオーターブレイク</span>
                    <span className="font-medium">6月3日〜7日</span>
                  </div>
                  <div className="flex justify-between">
                    <span>前期定期試験</span>
                    <span className="font-medium">8月1日〜7日</span>
                  </div>
                  <div className="flex justify-between">
                    <span>後期授業開始</span>
                    <span className="font-medium">9月24日</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
