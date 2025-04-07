import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeminarSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        専門ゼミ1, 専門ゼミ2, 卒業研究, 卒業論文について
      </h2>

      <Card>
        <CardContent className="pt-6">
          <p className="mb-4">
            情報科学部情報科学科では高度の学術を学修するため、3年次前期に専門ゼミ1、3年次後期に専門ゼミ2、4年次に卒業研究をそれぞれ履修し、4年次末に卒業論文を提出し、審査に合格することを義務付けています。ここでは、その流れについて説明します。
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>年次について</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            情報科学部情報科学科では、効率的な学修を図るために年次という考え方を用います。各年次は概ね以下で定義されますが、修得の状況によって例外が有り得ます。また入学年と直接の関係はありません。
          </p>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold">1年次</h3>
              <p>教養ゼミを履修する年次を指します。</p>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold">2年次</h3>
              <p>
                教養ゼミ修得後でかつ専門ゼミ1履修前の年次を指します。なお、専門ゼミ1の履修には学科基礎科目の必修科目（16単位）と、最低1つのプログラムについてプログラム科目の必修科目（8単位）全てを修得し、総合科目を含めて合計64単位以上修得することが必要です。
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold">3年次</h3>
              <p>
                専門ゼミ1、専門ゼミ2を履修する年次を指します。なお、卒業研究の履修には専門ゼミ1、専門ゼミ2の両方を修得することが必要です。
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold">4年次</h3>
              <p>
                卒業研究を履修する年次を指します。なお、卒業研究の履修と並行して卒業論文の指導が行われます。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>スケジュールの概要</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold">2年次</h3>
              <ul className="ml-6 space-y-1 list-disc">
                <li>7月: ゼミ配属希望アンケート (9月に結果公表)</li>
                <li>第3・4クオーターブレイク: ゼミ説明会</li>
                <li>12月~1月: 専門ゼミ1担当者訪問(事前予約すること)</li>
                <li>2月(定期試験最終日): 専門ゼミ1配属希望届締め切り</li>
                <li>3月中旬: 専門ゼミ1配属発表</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold">3年次</h3>
              <ul className="ml-6 space-y-1 list-disc">
                <li>3年前期: 専門ゼミ1の履修</li>
                <li>7月: 専門ゼミ2配属希望届締め切り (希望者のみ)</li>
                <li>3年後期: 専門ゼミ2の履修</li>
                <li>1月: 卒業研究配属希望締め切り (希望者のみ)</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold">4年次</h3>
              <ul className="ml-6 space-y-1 list-disc">
                <li>4年(通年): 卒業研究</li>
                <li>第1・2クオーターブレイク: 卒業研究テーマ発表会</li>
                <li>卒業論文主査・副査決定</li>
                <li>第3・4クオーターブレイク: 卒業研究進捗発表会</li>
                <li>1月末: 卒業論文提出締め切り</li>
                <li>2月前半: 卒業論文発表会</li>
                <li>2月後半: 卒業論文審査</li>
                <li>3月1日: 卒業論文最終版提出締め切り</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>注意点</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="ml-6 space-y-2 list-decimal">
            <li>
              上記スケジュールの正確な日程については年度ごとに発表します。また、専門ゼミ1、専門ゼミ2、卒業研究については学期当初に担当教員と配属学生との相談により、その実施時間割等を決めることとするため、時間割上は集中講義扱いになっています。
            </li>
            <li>
              専門ゼミ1、専門ゼミ2、卒業研究は2年間を通じて一つの専門分野・領域の学修を深め、その成果を卒業論文にまとめることで高度の学術を修得するためにあります。必要に応じた配属変更は以下の7、8のように可能ですが、専門ゼミ1の希望届は十分慎重に考えた上で提出してください。
            </li>
            <li>
              専門ゼミ1、専門ゼミ2、卒業研究は通常の授業科目と異なり、その高度の学術学修のため、各配属学生全体及び各配属学生ごとにゼミナール形式の他、個別指導、勉強会、読書会など多様な形態の学習を組み合わせるため、2年次に行われるゼミ説明会の説明等をよく確認してください。
            </li>
            <li>
              専門ゼミ1については各教員ごとに受入可能人数(その合計は専門ゼミ1履修予定者数の1.2倍程度)がゼミ説明会時に示されます。
            </li>
            <li>
              専門ゼミ1の後半(第2クオーターに当たる時期)についてはインターンシップ等を奨励するため、必要に応じてオンライン等の指導を併用します。
            </li>
            <li>
              専門ゼミ1の配属については希望届(第10希望まで記す予定)をもとに2年次までのGPAを参考にして決定されます。
            </li>
            <li>
              変更希望届を出した場合、専門ゼミ2の配属は、各教員ごとの受入可能人数の範囲内で、3年次前期までのGPAを参考にして決定されます。
            </li>
            <li>
              卒業研究の配属は原則として専門ゼミ2と同じです。変更希望届を出した場合、卒業研究の配属は各教員ごとの受入可能人数の範囲内で、3年次までのGPAを参考にして決定されます。
            </li>
            <li>
              卒業論文は1月末に定められた形式で完成稿を提出しなければなりません。ただし、その後の審査を経て合格した者は、必要な修正等を加えた上で、3月1日までに最終版を改めて提出することとします。卒業論文最終版は学部で保管し、のちの学生らも閲覧しますので、十分な校正等をしたものを提出しなければなりません。
            </li>
            <li>
              各学生にチューターがつき、安全かつ健全な学修・生活等についても助言・指導します。１年次、２年次については、教養ゼミの担当教員が、３年次、４年次については専門ゼミ1、専門ゼミ2、卒業研究の担当教員がチューターです。
            </li>
            <li>
              早期卒業、協定校留学、休学などの理由で教育上有益とみなす場合は、専門ゼミ1、専門ゼミ2、卒業研究の履修時期及び履修期間、卒業論文の提出時期について変更されることがあります。この詳細については2年次に行われるゼミ説明会で説明するとともに、その詳細は文書で公表されます。
            </li>
            <li>
              その他、特別に配慮すべき場合に、配属の変更等を行なう場合があります。
            </li>
            <li>
              この説明は2025年度入学生に適用されますが、学生の不利益にならない改訂を施すことがあります。その際は十分な猶予期間をもって公表します。
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
