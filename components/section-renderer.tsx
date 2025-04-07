'use client';
import {
  PolicyContent,
  SemesterContent,
  GraduationContent,
  CourseTableContent,
  SeminarContent,
  CurriculumModelContent,
  NumberingContent,
  TeachingContent,
  AIProgramContent,
  UserProgressContent,
  UserGradesContent,
  UserPlanContent,
  UserRequirementsContent,
  HomeContent,
} from './section-contents';

// セクションレンダラーコンポーネント
export default function SectionRenderer({ section, userSection = null }) {
  // セクションに応じたコンテンツをレンダリング
  const renderContent = () => {
    // 通常セクション
    if (section) {
      switch (section) {
        case 'top':
          return <HomeContent />;
        case 'policy':
          return <PolicyContent />;
        case 'semester':
          return <SemesterContent />;
        case 'graduation':
          return <GraduationContent />;
        case 'courses':
          return <CourseTableContent />;
        case 'seminar':
          return <SeminarContent />;
        case 'models':
          return <CurriculumModelContent />;
        case 'numbering':
          return <NumberingContent />;
        case 'teaching':
          return <TeachingContent />;
        case 'ai-program':
          return <AIProgramContent />;
        default:
          return <HomeContent />;
      }
    }

    // ユーザーセクション
    if (userSection) {
      switch (userSection) {
        case 'progress':
          return <UserProgressContent />;
        case 'grades':
          return <UserGradesContent />;
        case 'plan':
          return <UserPlanContent />;
        case 'requirements':
          return <UserRequirementsContent />;
        default:
          return <UserProgressContent />;
      }
    }

    return <HomeContent />;
  };

  return (
    <div className="container max-w-6xl mx-auto pb-20">{renderContent()}</div>
  );
}
