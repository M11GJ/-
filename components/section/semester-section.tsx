import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SemesterSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">情報科学部における学期の考え方</h2>

      <Card>
        <CardHeader>
          <CardTitle>セメスター制とクオーター制の併用</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            情報科学部で開講される専門科目の多くはクオーター制で実施されます。これにより同じ授業を週に2回実施することで短期間で集中して学ぶことができます。一部の科目及び全学共通の総合科目についてはセメスター制で開講されます。
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold">セメスター制</h3>
              <p>
                1年間を2学期に分け、春から始まる学期を前期、秋から始まる学期を後期とします。セメスター制の授業科目は、15回分の授業を15週間かけて展開します。
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold">クオーター制</h3>
              <p>
                1年間を4学期に分けて授業を展開します。年度の初めの第1クオーターから終わりの第4クオーターまであります。第1クオーターと第2クオーターの間、及び第3クオーターと第4クオーターの間には1週間程度のクオーターブレイクがあります。クオーターブレイク中はクオーター制の授業はありませんが、セメスター制の授業は実施されることがあるため注意が必要です。
              </p>
            </div>
          </div>

          <div className="p-4 mt-6 border rounded-lg bg-blue-50">
            <p>
              情報科学部の時間割では3年次第2クオーターには対面を必須とする授業は配置していません。この学期にはオンデマンドやハイブリッドなどの遠隔に対応した授業のみが配置されます。長期間のインターンシップや短期海外留学、滞在型のボランティアなどへの参加に活用してください。
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
