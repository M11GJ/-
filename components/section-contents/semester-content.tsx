import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { semesterSystem } from '@/lib/data';

export default function SemesterContent() {
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
