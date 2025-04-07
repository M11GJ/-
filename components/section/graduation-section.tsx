import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function GraduationSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">情報科学部情報科学科 卒業要件</h2>

      <Card>
        <CardHeader>
          <CardTitle>卒業要件</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            本学部の卒業要件は4年以上在籍し、以下の1.および2.に示す要件を満たす合計124単位を修得し、かつ3.を満たすことである。なお履修登録においては、情報科学部情報科学科授業科目表を必ず確認すること。
          </p>

          <ol className="ml-6 space-y-6 list-decimal">
            <li>
              <div className="font-semibold">総合科目</div>
              <p>必修科目19単位を修得すること。</p>
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
                        学科基礎科目（要件合計20単位）
                      </div>
                      <p>
                        必修科目16単位を修得すること。実践英語（3科目）から4単位修得すること。
                      </p>
                    </li>
                    <li>
                      <div className="font-semibold">
                        プログラム科目（要件合計22単位）
                      </div>
                      <p>
                        下記に示す三つのプログラムから、最低1つのプログラムを履修すること。
                      </p>
                      <p>
                        各プログラムの履修にあたっては、必修科目を含む22単位を修得すること。
                      </p>
                      <ul className="ml-6 mt-2 space-y-1 list-disc">
                        <li>①データサイエンスプログラム（DS: Data Science）</li>
                        <li>
                          ②情報エンジニアリングプログラム（IE: Information
                          Engineering）
                        </li>
                        <li>
                          ③ビジネスアナリティクスプログラム（BA: Business
                          Analytics）
                        </li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  <div className="font-semibold">演習科目（要件合計8単位）</div>
                  <p>演習科目から必修科目8単位を修得すること。</p>
                </li>
                <li>
                  <div className="font-semibold">
                    他学科専門科目（要件合計4単位）
                  </div>
                  <p>他学科専門科目から4単位を修得すること。</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="font-semibold">卒業論文</div>
              <p>4年次に卒業論文を提出し、卒業論文の審査に合格すること。</p>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>卒業資格所要単位一覧</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>科目履修</TableHead>
                  <TableHead>区分</TableHead>
                  <TableHead>必修/選択</TableHead>
                  <TableHead>単位数</TableHead>
                  <TableHead>合計</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell rowSpan={1}>総合科目</TableCell>
                  <TableCell></TableCell>
                  <TableCell>必修</TableCell>
                  <TableCell>19</TableCell>
                  <TableCell rowSpan={1}>19</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={6}>専門科目</TableCell>
                  <TableCell rowSpan={2}>学科基礎科目</TableCell>
                  <TableCell>必修</TableCell>
                  <TableCell>16</TableCell>
                  <TableCell rowSpan={2}>20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>実践英語</TableCell>
                  <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>プログラム科目</TableCell>
                  <TableCell>履修したプログラムのプログラム科目</TableCell>
                  <TableCell>22</TableCell>
                  <TableCell>22</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>演習科目</TableCell>
                  <TableCell>必修</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>他学科専門科目</TableCell>
                  <TableCell></TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} className="text-right font-bold">
                    専門科目合計
                  </TableCell>
                  <TableCell>80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>卒業論文</TableCell>
                  <TableCell></TableCell>
                  <TableCell>単位なし</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow className="font-bold">
                  <TableCell colSpan={4} className="text-right">
                    総計
                  </TableCell>
                  <TableCell>124</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>履修単位数の上限について</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            各年次の履修上限単位として、半期は24単位を履修上限単位とし、年間では48単位を履修上限単位とする。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
