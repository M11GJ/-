import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { policies } from '@/lib/data';

export default function PolicyContent() {
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
