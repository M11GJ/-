'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function CourseTableSection() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    人間形成: true,
    地域価値: true,
    リベラルアーツ: true,
    リテラシー: true,
    学部基礎: true,
    データサイエンス: true,
    情報エンジニアリング: true,
    ビジネスアナリティクス: true,
    演習科目: true,
    他学科専門: true,
    卒業論文: true,
    卒業資格: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // テーブルの共通スタイルを定義
  const tableStyle = 'border-collapse';
  const cellStyle = 'border-x border-gray-200';

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold pl-4">
        情報科学部情報科学科 授業科目表
      </h2>
      <p className="text-lg font-semibold pl-4">
        2025年度入学 情報科学部情報科学科 授業科目表
      </p>

      <p className="mb-4 text-sm text-gray-600">
        ※プログラム欄: ◎=プログラム必修科目, ○=選択科目
        <br />
        DS=データサイエンス, IE=情報エンジニアリング, BA=ビジネスアナリティクス
        <br />
        (4)=合計で4単位以上修得することが必要な科目
      </p>

      {/* 人間形成と個性伸張のための科目群 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('人間形成')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['人間形成'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            総合科目 - 人間形成と個性伸張のための科目群
          </CardTitle>
        </CardHeader>
        {openSections['人間形成'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>
                    周南Well-being創生入門
                  </TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    持続可能な社会とダイバーシティ
                  </TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>教養スポーツ実習I</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>健康とスポーツ</TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>日本国憲法</TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    メンタルヘルス入門
                  </TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    教養スポーツ実習II
                  </TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>人の健康生活</TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    異文化コミュニケーション
                  </TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>

      {/* 地域価値創造のための科目群 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('地域価値')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['地域価値'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            総合科目 - 地域価値創造のための科目群
          </CardTitle>
        </CardHeader>
        {openSections['地域価値'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>キャリア形成活動I</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    キャリア形成活動II
                  </TableCell>
                  <TableCell className={cellStyle}>2後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>情報社会論</TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    周南Well-being創生論
                  </TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>健康と福祉</TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    デザインシンキング
                  </TableCell>
                  <TableCell className={cellStyle}>1通</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>周南地域と産業</TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>

      {/* リベラルアーツのための科目群 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('リベラルアーツ')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['リベラルアーツ'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            総合科目 - リベラルアーツのための科目群
          </CardTitle>
        </CardHeader>
        {openSections['リベラルアーツ'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>教養ゼミ</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    アカデミックライティング
                  </TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>哲学</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>社会学</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>生活と経済経営</TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>

      {/* リテラシーのための科目群 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('リテラシー')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['リテラシー'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            総合科目 - リテラシーのための科目群
          </CardTitle>
        </CardHeader>
        {openSections['リテラシー'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>
                    コミュニケーション英語I
                  </TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    コミュニケーション英語II
                  </TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    コミュニケーション英語III
                  </TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    コミュニケーション英語IV
                  </TableCell>
                  <TableCell className={cellStyle}>2後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>ビジネス英会話</TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>情報リテラシー</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>Python入門</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    データサイエンス入門
                  </TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>情報倫理</TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>留学英語</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>ビジネス英作文</TableCell>
                  <TableCell className={cellStyle}>2後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>総合英語中上級I</TableCell>
                  <TableCell className={cellStyle}>3前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>総合英語中上級II</TableCell>
                  <TableCell className={cellStyle}>3後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>グローバル英語</TableCell>
                  <TableCell className={cellStyle}>3後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>

      {/* 学部基礎科目 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('学部基礎')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['学部基礎'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            学部基礎科目
          </CardTitle>
        </CardHeader>
        {openSections['学部基礎'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>情報科学概論</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    実社会とデータ分析
                  </TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>計算機概論</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>Python応用</TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>データ分析基礎</TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>線形代数基礎</TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>微分積分基礎</TableCell>
                  <TableCell className={cellStyle}>1後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>確率統計基礎</TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>AI・機械学習基礎</TableCell>
                  <TableCell className={cellStyle}>2後</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>実践英語(AI)</TableCell>
                  <TableCell className={cellStyle}>3前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>実践英語(数学)</TableCell>
                  <TableCell className={cellStyle}>3前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>実践英語(情報)</TableCell>
                  <TableCell className={cellStyle}>3後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>

      {/* データサイエンスプログラム科目 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('データサイエンス')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['データサイエンス'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            データサイエンスプログラム科目
          </CardTitle>
        </CardHeader>
        {openSections['データサイエンス'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>
                    データサイエンス概論
                  </TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>IoTとAI</TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>多変量解析</TableCell>
                  <TableCell className={cellStyle}>2後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    ニューラルネットワーク
                  </TableCell>
                  <TableCell className={cellStyle}>2後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>モデリングの数理</TableCell>
                  <TableCell className={cellStyle}>3前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>数値解析</TableCell>
                  <TableCell className={cellStyle}>3前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>AI・自然言語処理</TableCell>
                  <TableCell className={cellStyle}>3前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>AI・推薦システム</TableCell>
                  <TableCell className={cellStyle}>3後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    環境データサイエンス
                  </TableCell>
                  <TableCell className={cellStyle}>3後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>AI・画像情報処理</TableCell>
                  <TableCell className={cellStyle}>4前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>質的データ分析</TableCell>
                  <TableCell className={cellStyle}>3後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>パターン認識</TableCell>
                  <TableCell className={cellStyle}>2(3)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>生体情報システム</TableCell>
                  <TableCell className={cellStyle}>2(4)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>

      {/* 情報エンジニアリングプログラム科目 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('情報エンジニアリング')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['情報エンジニアリング'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            情報エンジニアリングプログラム科目
          </CardTitle>
        </CardHeader>
        {openSections['情報エンジニアリング'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>
                    情報エンジニアリング概論
                  </TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>データベース</TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    アルゴリズムとデータ構造
                  </TableCell>
                  <TableCell className={cellStyle}>2後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>プログラミング</TableCell>
                  <TableCell className={cellStyle}>2後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    情報ネットワークとセキュリティ
                  </TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>ソフトウェア工学</TableCell>
                  <TableCell className={cellStyle}>2(3)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    コンピュータグラフィックス
                  </TableCell>
                  <TableCell className={cellStyle}>2(4)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>組み込みシステム</TableCell>
                  <TableCell className={cellStyle}>2(4)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    ヒューマンコンピュータインタラクション
                  </TableCell>
                  <TableCell className={cellStyle}>3(1)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>医療情報システム</TableCell>
                  <TableCell className={cellStyle}>3(2)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    人間とロボットの共生
                  </TableCell>
                  <TableCell className={cellStyle}>3(2)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    モバイルコンピューティング
                  </TableCell>
                  <TableCell className={cellStyle}>3(3)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>

      {/* ビジネスアナリティクスプログラム科目 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('ビジネスアナリティクス')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['ビジネスアナリティクス'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            ビジネスアナリティクスプログラム科目
          </CardTitle>
        </CardHeader>
        {openSections['ビジネスアナリティクス'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>
                    ビジネスアナリティクス概論
                  </TableCell>
                  <TableCell className={cellStyle}>1(4)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>感性情報処理</TableCell>
                  <TableCell className={cellStyle}>2(1)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>最適化モデリング</TableCell>
                  <TableCell className={cellStyle}>2(2)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>会計情報と経営</TableCell>
                  <TableCell className={cellStyle}>2(2)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>経営と数理モデル</TableCell>
                  <TableCell className={cellStyle}>2(3)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    インターネットマーケティング
                  </TableCell>
                  <TableCell className={cellStyle}>2(4)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>シミュレーション</TableCell>
                  <TableCell className={cellStyle}>2(4)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    品質管理とデータ分析
                  </TableCell>
                  <TableCell className={cellStyle}>3(1)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    マーケティング・リサーチ
                  </TableCell>
                  <TableCell className={cellStyle}>3(2)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    フィンテック・ブロックチェーン
                  </TableCell>
                  <TableCell className={cellStyle}>3(3)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>金融データ解析</TableCell>
                  <TableCell className={cellStyle}>3(4)</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ○
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>

      {/* 他学科専門科目 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('他学科専門')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['他学科専門'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            他学科専門科目
          </CardTitle>
        </CardHeader>
        {openSections['他学科専門'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>
                    地域観光まちづくり論
                  </TableCell>
                  <TableCell className={cellStyle}>1前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>マーケティング論1</TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    地域マネジメント論
                  </TableCell>
                  <TableCell className={cellStyle}>2前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>スポーツ産業学</TableCell>
                  <TableCell className={cellStyle}>3前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    スポーツマネジメント
                  </TableCell>
                  <TableCell className={cellStyle}>3後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>
                    スポーツツーリズム論
                  </TableCell>
                  <TableCell className={cellStyle}>3後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>保健医療と福祉</TableCell>
                  <TableCell className={cellStyle}>4前</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>医療経済学</TableCell>
                  <TableCell className={cellStyle}>4後</TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    1
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="mt-4 text-sm text-gray-600">
              ※他学科専門科目は4単位以上修得する必要があります。
            </p>
          </CardContent>
        )}
      </Card>

      {/* 演習科目 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('演習科目')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['演習科目'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            演習科目
          </CardTitle>
        </CardHeader>
        {openSections['演習科目'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>専門ゼミ1</TableCell>
                  <TableCell className={cellStyle}>3(1)(2)(通)</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>専門ゼミ2</TableCell>
                  <TableCell className={cellStyle}>3(3)(4)(通)</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    2
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>卒業研究</TableCell>
                  <TableCell className={cellStyle}>4(1)(2)(3)(4)(通)</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    4
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    ◎
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="mt-4 text-sm text-gray-600">
              ※演習科目は8単位以上修得する必要があります。
            </p>
          </CardContent>
        )}
      </Card>

      {/* 卒業論文 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('卒業論文')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['卒業論文'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            卒業論文
          </CardTitle>
        </CardHeader>
        {openSections['卒業論文'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>授業科目の名称</TableHead>
                  <TableHead className={cellStyle}>配当年次</TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    必修
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    選択
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    DS
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    IE
                  </TableHead>
                  <TableHead className="w-16 text-center border-x border-gray-200">
                    BA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle}>卒業論文</TableCell>
                  <TableCell className={cellStyle}>4</TableCell>
                  <TableCell className="text-center border-x border-gray-200">
                    -
                  </TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                  <TableCell className="text-center border-x border-gray-200"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="mt-4 text-sm text-gray-600">
              ※卒業論文は単位なしだが、卒業要件として必須である。
            </p>
          </CardContent>
        )}
      </Card>

      {/* 卒業資格所要単位 */}
      <Card className="border-primary/20">
        <CardHeader
          className="bg-primary/5 border-b border-primary/20 cursor-pointer flex flex-row items-center justify-between"
          onClick={() => toggleSection('卒業資格')}
        >
          <CardTitle className="flex items-center gap-2">
            {openSections['卒業資格'] ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            卒業資格所要単位
          </CardTitle>
        </CardHeader>
        {openSections['卒業資格'] && (
          <CardContent className="pt-6">
            <Table className={tableStyle}>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className={cellStyle}>科目履修</TableHead>
                  <TableHead className={cellStyle}>区分</TableHead>
                  <TableHead className={cellStyle}>必修/選択</TableHead>
                  <TableHead className={cellStyle}>単位数</TableHead>
                  <TableHead className={cellStyle}>合計</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className={cellStyle} rowSpan={1}>
                    総合科目
                  </TableCell>
                  <TableCell className={cellStyle}></TableCell>
                  <TableCell className={cellStyle}>必修</TableCell>
                  <TableCell className={cellStyle}>19</TableCell>
                  <TableCell className={cellStyle} rowSpan={1}>
                    19
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle} rowSpan={6}>
                    専門科目
                  </TableCell>
                  <TableCell className={cellStyle} rowSpan={2}>
                    学科基礎科目
                  </TableCell>
                  <TableCell className={cellStyle}>必修</TableCell>
                  <TableCell className={cellStyle}>16</TableCell>
                  <TableCell className={cellStyle} rowSpan={2}>
                    20
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>実践英語</TableCell>
                  <TableCell className={cellStyle}>4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>プログラム科目</TableCell>
                  <TableCell className={cellStyle}>
                    履修したプログラムのプログラム科目
                  </TableCell>
                  <TableCell className={cellStyle}>22</TableCell>
                  <TableCell className={cellStyle}>22</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>演習科目</TableCell>
                  <TableCell className={cellStyle}>必修</TableCell>
                  <TableCell className={cellStyle}>8</TableCell>
                  <TableCell className={cellStyle}>8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>他学科専門科目</TableCell>
                  <TableCell className={cellStyle}></TableCell>
                  <TableCell className={cellStyle}>4</TableCell>
                  <TableCell className={cellStyle}>4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-right font-bold border-x border-gray-200"
                  >
                    専門科目合計
                  </TableCell>
                  <TableCell className={cellStyle}>80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={cellStyle}>卒業論文</TableCell>
                  <TableCell className={cellStyle}></TableCell>
                  <TableCell className={cellStyle}>単位なし</TableCell>
                  <TableCell className={cellStyle}>-</TableCell>
                  <TableCell className={cellStyle}>-</TableCell>
                </TableRow>
                <TableRow className="font-bold">
                  <TableCell
                    colSpan={4}
                    className="text-right border-x border-gray-200"
                  >
                    総計
                  </TableCell>
                  <TableCell className={cellStyle}>124</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>
      <p className="mt-4 text-sm text-gray-600">
        ◎...必修科目
        <br />
        (4)...合計で４単位以上修得することが必要な科目
        <br />
        〇...プログラム科目（例：モデリングの数理はDSプログラム科目であるが、BAプログラム科目としても認定する）
        <br />
        ※①②(通)...週1回の授業を1Q、2Qにわたって実施する。スケジュールの詳細は講義内で告知する。
        <br />
        ※③④(通)...週1回の授業を3Q、4Qにわたって実施する。スケジュールの詳細は講義内で告知する。
        <br />
        ※①②③④(通)...週1回の授業を1～4Qにわたって実施する。スケジュールの詳細は講義内で告知する。
      </p>
    </div>
  );
}
