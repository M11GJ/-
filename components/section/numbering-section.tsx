import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function NumberingSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        情報科学部情報科学科 科目ナンバリング
      </h2>

      <Card>
        <CardHeader>
          <CardTitle>
            2025年度入学 情報科学部情報科学科 科目ナンバリング
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            科目ナンバリングとは、授業科目に適切な番号を付与し分類することで、学修の段階や順序等を表し、教育課程の体系性を明示する仕組みです。
          </p>
          <p className="mb-4">
            本学の科目ナンバリングは、「学部・学科コード」「レベルコード」「分野コード」「学科コード」「連番」から構成されてい��す。
          </p>

          <div className="p-4 mb-6 border rounded-lg bg-gray-50">
            <h3 className="mb-2 text-lg font-semibold">
              ナンバリングコードの構成
            </h3>
            <p className="mb-2">例：31-1-11-21-01</p>
            <ul className="ml-6 space-y-1 list-disc">
              <li>
                <span className="font-semibold">31</span>
                ：学部・学科コード（情報科学部情報科学科）
              </li>
              <li>
                <span className="font-semibold">1</span>
                ：レベルコード（100番台：基礎、200番台：発展、300番台：応用）
              </li>
              <li>
                <span className="font-semibold">11</span>
                ：分野コード（教養、専門など）
              </li>
              <li>
                <span className="font-semibold">21</span>：学科コード
              </li>
              <li>
                <span className="font-semibold">01</span>：連番
              </li>
            </ul>
          </div>

          <div className="relative overflow-auto">
            <div className="max-w-full">
              <Table className="w-full table-fixed">
                <TableHeader className="sticky top-0 bg-gray-100">
                  <TableRow>
                    <TableHead className="w-[15%]">科目区分</TableHead>
                    <TableHead className="w-[25%]">授業科目名</TableHead>
                    <TableHead className="w-[15%]">
                      ナンバリングコード
                    </TableHead>
                    <TableHead className="w-[10%]">レベル</TableHead>
                    <TableHead className="w-[10%]">分野</TableHead>
                    <TableHead className="w-[10%]">連番</TableHead>
                    <TableHead className="w-[15%]">備考</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>総合科目</TableCell>
                    <TableCell>周南Well-being創生入門</TableCell>
                    <TableCell>31-1-11-21-01</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>教養</TableCell>
                    <TableCell>01</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>総合科目</TableCell>
                    <TableCell>メンタルヘルス入門</TableCell>
                    <TableCell>33-1-11-21-00</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>教養</TableCell>
                    <TableCell>00</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>総合科目</TableCell>
                    <TableCell>持続可能な社会とダイバーシティ</TableCell>
                    <TableCell>37-1-17-21-00</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>教養</TableCell>
                    <TableCell>00</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>総合科目</TableCell>
                    <TableCell>教養スポーツ実習Ⅰ</TableCell>
                    <TableCell>31-1-11-21-02</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>教養</TableCell>
                    <TableCell>02</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>総合科目</TableCell>
                    <TableCell>健康とスポーツ</TableCell>
                    <TableCell>31-1-11-21-03</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>教養</TableCell>
                    <TableCell>03</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>総合科目</TableCell>
                    <TableCell>日本国憲法</TableCell>
                    <TableCell>31-1-12-21-01</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>教養</TableCell>
                    <TableCell>01</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>総合科目</TableCell>
                    <TableCell>情報リテラシー</TableCell>
                    <TableCell>31-1-14-21-01</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>教養</TableCell>
                    <TableCell>01</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>総合科目</TableCell>
                    <TableCell>Python入門</TableCell>
                    <TableCell>31-1-14-21-02</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>教養</TableCell>
                    <TableCell>02</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>学部基礎</TableCell>
                    <TableCell>情報科学概論</TableCell>
                    <TableCell>31-2-21-21-01</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>専門</TableCell>
                    <TableCell>01</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>学部基礎</TableCell>
                    <TableCell>実社会とデータ分析</TableCell>
                    <TableCell>31-2-21-21-02</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>専門</TableCell>
                    <TableCell>02</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>学部基礎</TableCell>
                    <TableCell>計算機概論</TableCell>
                    <TableCell>31-2-21-21-03</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>専門</TableCell>
                    <TableCell>03</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>学部基礎</TableCell>
                    <TableCell>Python応用</TableCell>
                    <TableCell>31-2-21-21-04</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>専門</TableCell>
                    <TableCell>04</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>学部基礎</TableCell>
                    <TableCell>データ分析基礎</TableCell>
                    <TableCell>31-2-21-21-05</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>専門</TableCell>
                    <TableCell>05</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            ※上記は一部の科目のナンバリング例です。全科目のナンバリングコードについては、シラバスを参照してください。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
