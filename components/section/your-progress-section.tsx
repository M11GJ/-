'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Plus, Pencil } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function YourProgressSection() {
  // 実際のアプリケーションでは、これらの値はデータベースやAPIから取得します
  const [selectedProgram, setSelectedProgram] = useState('ds');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddCourseDialog, setShowAddCourseDialog] = useState(false);
  const [showEditGradeDialog, setShowEditGradeDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState('');
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [loading, setLoading] = useState(true);

  // フィルタリング設定
  const [filters, setFilters] = useState({
    showRequired: true,
    showElective: false,
    selectedYear: 'all',
    selectedSemester: 'all',
    selectedCategory: 'all',
  });

  // 成績評価と評価点のマッピング
  const gradePoints = {
    秀: 4,
    優: 3,
    良: 2,
    可: 1,
    不可: 0,
    '': 0,
  };

  // サンプルデータ - 実際のアプリケーションではデータベースから取得
  const [completedCourses, setCompletedCourses] = useState([
    {
      code: '31-1-11-21-01',
      name: '周南Well-being創生入門',
      category: '総合',
      credits: 2,
      grade: '優',
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-11-21-02',
      name: '教養スポーツ実習Ⅰ',
      category: '総合',
      credits: 1,
      grade: '優',
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-14-21-01',
      name: '情報リテラシー',
      category: '総合',
      credits: 2,
      grade: '良',
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-14-21-02',
      name: 'Python入門',
      category: '総合',
      credits: 2,
      grade: '優',
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-01',
      name: '情報科学概論',
      category: '基礎',
      credits: 2,
      grade: '良',
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-02',
      name: '実社会とデータ分析',
      category: '基礎',
      credits: 2,
      grade: '優',
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-03',
      name: '計算機概論',
      category: '基礎',
      credits: 2,
      grade: '可',
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-04',
      name: 'Python応用',
      category: '基礎',
      credits: 2,
      grade: '良',
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-05',
      name: 'データ分析基礎',
      category: '基礎',
      credits: 2,
      grade: '優',
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-1-14-21-03',
      name: 'コミュニケーション英語Ⅰ',
      category: '総合',
      credits: 1,
      grade: '優',
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-1-14-21-04',
      name: 'キャリア形成活動Ⅰ',
      category: '総合',
      credits: 2,
      grade: '良',
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-1-11-21-03',
      name: '持続可能な社会とダイバーシティ',
      category: '総合',
      credits: 2,
      grade: '良',
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-1-14-21-05',
      name: 'アカデミックライティング',
      category: '総合',
      credits: 2,
      grade: '優',
      year: '2年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-14-21-06',
      name: 'コミュニケーション英語Ⅱ',
      category: '総合',
      credits: 1,
      grade: '良',
      year: '2年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-14-21-07',
      name: 'データサイエンス入門',
      category: '総合',
      credits: 2,
      grade: '優',
      year: '2年次',
      semester: '前期',
      required: false,
    },
    {
      code: '31-1-14-21-08',
      name: '情報倫理',
      category: '総合',
      credits: 2,
      grade: '良',
      year: '2年次',
      semester: '前期',
      required: false,
    },
  ]);

  // 今後履修予定の科目
  const [plannedCourses, setPlannedCourses] = useState([
    {
      code: '31-2-21-21-10',
      name: '確率統計基礎',
      category: '基礎',
      credits: 2,
      year: '2年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-11',
      name: 'AI・機械学習基礎',
      category: '基礎',
      credits: 2,
      year: '2年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-12',
      name: 'データサイエンス概論',
      category: 'DS',
      credits: 2,
      year: '2年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-13',
      name: 'IoTとAI',
      category: 'DS',
      credits: 2,
      year: '2年次',
      semester: '後期',
      required: true,
    },
  ]);

  // 全授業科目リスト（検索用）- 実際のアプリケーションではAPIから取得
  const allCourses = [
    // 総合科目
    {
      code: '31-1-11-21-01',
      name: '周南Well-being創生入門',
      category: '総合',
      credits: 2,
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-11-21-02',
      name: '教養スポーツ実習Ⅰ',
      category: '総合',
      credits: 1,
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-14-21-01',
      name: '情報リテラシー',
      category: '総合',
      credits: 2,
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-14-21-02',
      name: 'Python入門',
      category: '総合',
      credits: 2,
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-14-21-03',
      name: 'コミュニケーション英語Ⅰ',
      category: '総合',
      credits: 1,
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-14-21-04',
      name: 'キャリア形成活動Ⅰ',
      category: '総合',
      credits: 2,
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-1-11-21-03',
      name: '持続可能な社会とダイバーシティ',
      category: '総合',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-1-14-21-05',
      name: 'アカデミックライティング',
      category: '総合',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-1-14-21-06',
      name: 'コミュニケーション英語Ⅱ',
      category: '総合',
      credits: 1,
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-1-14-21-07',
      name: 'データサイエンス入門',
      category: '総合',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: false,
    },
    {
      code: '31-1-14-21-08',
      name: '情報倫理',
      category: '総合',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: false,
    },

    // 学科基礎科目
    {
      code: '31-2-21-21-01',
      name: '情報科学概論',
      category: '基礎',
      credits: 2,
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-02',
      name: '実社会とデータ分析',
      category: '基礎',
      credits: 2,
      year: '1年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-03',
      name: '計算機概論',
      category: '基礎',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-04',
      name: 'Python応用',
      category: '基礎',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-05',
      name: 'データ分析基礎',
      category: '基礎',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-06',
      name: '線形代数基礎',
      category: '基礎',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-07',
      name: 'VBAプログラミング',
      category: '基礎',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: false,
    },
    {
      code: '31-2-21-21-08',
      name: 'データの可視化',
      category: '基礎',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: false,
    },
    {
      code: '31-2-21-21-09',
      name: '微分積分基礎',
      category: '基礎',
      credits: 2,
      year: '1年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-10',
      name: '確率統計基礎',
      category: '基礎',
      credits: 2,
      year: '2年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-11',
      name: 'AI・機械学習基礎',
      category: '基礎',
      credits: 2,
      year: '2年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-14',
      name: 'Javaプログラミング',
      category: '基礎',
      credits: 2,
      year: '2年次',
      semester: '後期',
      required: false,
    },

    // データサイエンスプログラム科目
    {
      code: '31-2-21-21-12',
      name: 'データサイエンス概論',
      category: 'DS',
      credits: 2,
      year: '2年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-13',
      name: 'IoTとAI',
      category: 'DS',
      credits: 2,
      year: '2年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-15',
      name: '多変量解析',
      category: 'DS',
      credits: 2,
      year: '2年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-16',
      name: 'ニューラルネットワーク',
      category: 'DS',
      credits: 2,
      year: '2年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-17',
      name: 'パターン認識',
      category: 'DS',
      credits: 2,
      year: '2年次',
      semester: '後期',
      required: false,
    },

    // 情報エンジニアリングプログラム科目
    {
      code: '31-2-21-21-20',
      name: '情報エンジニアリング概論',
      category: 'IE',
      credits: 2,
      year: '2年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-21',
      name: 'データベース',
      category: 'IE',
      credits: 2,
      year: '2年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-22',
      name: 'アルゴリズムとデータ構造',
      category: 'IE',
      credits: 2,
      year: '2年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-23',
      name: 'プログラミング',
      category: 'IE',
      credits: 2,
      year: '2年次',
      semester: '前期',
      required: true,
    },

    // ビジネスアナリティクスプログラム科目
    {
      code: '31-2-21-21-30',
      name: 'ビジネスアナリティクス概論',
      category: 'BA',
      credits: 2,
      year: '2年次',
      semester: '前期',
      required: true,
    },
    {
      code: '31-2-21-21-31',
      name: '感性情報処理',
      category: 'BA',
      credits: 2,
      year: '2年次',
      semester: '前期',
      required: false,
    },
    {
      code: '31-2-21-21-32',
      name: '最適化モデリング',
      category: 'BA',
      credits: 2,
      year: '2年次',
      semester: '後期',
      required: true,
    },
    {
      code: '31-2-21-21-33',
      name: '会計情報と経営',
      category: 'BA',
      credits: 2,
      year: '2年次',
      semester: '後期',
      required: false,
    },
  ];

  // データベースからデータを取得する関数
  const loadData = async () => {
    try {
      setLoading(true);
      // 実際のアプリケーションではここでデータベースからデータを取得
      // const data = await fetchCourses()
      // setCompletedCourses(data.completedCourses)
      // setPlannedCourses(data.plannedCourses)

      // サンプルデータを使用する場合は以下のコメントを解除
      // setCompletedCourses(sampleCompletedCourses)
      // setPlannedCourses(samplePlannedCourses)

      setLoading(false);
    } catch (error) {
      console.error('データの取得に失敗しました:', error);
      setLoading(false);
    }
  };

  // コンポーネントのマウント時にデータを取得
  useEffect(() => {
    loadData();
  }, []);

  // 検索結果
  const [searchResults, setSearchResults] = useState([]);

  // 検索処理
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = allCourses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 既に履修済みまたは履修予定の科目を除外
    const completedCodes = completedCourses.map((c) => c.code);
    const plannedCodes = plannedCourses.map((c) => c.code);
    const filteredResults = results.filter(
      (course) =>
        !completedCodes.includes(course.code) &&
        !plannedCodes.includes(course.code)
    );

    setSearchResults(filteredResults);
  }, [searchTerm, completedCourses, plannedCourses]);

  // 科目を履修済みリストに追加
  const addCompletedCourse = async (course) => {
    try {
      // データベースに追加
      // await dbAddCompletedCourse({
      //   ...course,
      //   grade: "",
      //   userId: "current-user-id" // 実際のアプリケーションではユーザーIDを使用
      // })

      // 状態を更新
      setCompletedCourses([...completedCourses, { ...course, grade: '' }]);
      setShowAddCourseDialog(false);
      setSearchTerm('');
      setSearchResults([]);
    } catch (error) {
      console.error('科目の追加に失敗しました:', error);
    }
  };

  // 科目を履修予定リストに追加
  const addPlannedCourse = (course) => {
    setPlannedCourses([...plannedCourses, course]);
    setShowAddCourseDialog(false);
    setSearchTerm('');
    setSearchResults([]);
  };

  // 成績を更新
  const updateGrade = async () => {
    try {
      // データベースを更新
      // await updateCourseGrade({
      //   courseCode: selectedCourse.code,
      //   grade: selectedGrade,
      //   userId: "current-user-id" // 実際のアプリケーションではユーザーIDを使用
      // })

      // 状態を更新
      const updatedCourses = completedCourses.map((course) =>
        course.code === selectedCourse.code
          ? { ...course, grade: selectedGrade }
          : course
      );
      setCompletedCourses(updatedCourses);
      setShowEditGradeDialog(false);
    } catch (error) {
      console.error('成績の更新に失敗しました:', error);
    }
  };

  // 進捗率の計算
  const calculateProgress = (earned: number, required: number) => {
    return Math.min(Math.round((earned / required) * 100), 100);
  };

  // GPA計算
  const calculateGPA = () => {
    const totalPoints = completedCourses.reduce((sum, course) => {
      return sum + (gradePoints[course.grade] || 0) * course.credits;
    }, 0);

    const totalCredits = completedCourses.reduce((sum, course) => {
      // 不可の場合は単位数に含めない
      return course.grade !== '不可' ? sum + course.credits : sum;
    }, 0);

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  // フィルタリングされた履修済み科目
  const filteredCompletedCourses = completedCourses.filter((course) => {
    if (filters.showRequired && !filters.showElective && !course.required)
      return false;
    if (!filters.showRequired && filters.showElective && course.required)
      return false;
    if (filters.selectedYear !== 'all' && course.year !== filters.selectedYear)
      return false;
    if (
      filters.selectedSemester !== 'all' &&
      course.semester !== filters.selectedSemester
    )
      return false;
    if (
      filters.selectedCategory !== 'all' &&
      course.category !== filters.selectedCategory
    )
      return false;
    return true;
  });

  // 年次ごとにグループ化
  const groupedCompletedCourses = filteredCompletedCourses.reduce(
    (groups, course) => {
      const year = course.year;
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(course);
      return groups;
    },
    {}
  );

  // 履修状況の集計
  const progress = {
    totalCredits: completedCourses
      .filter((c) => c.grade !== '不可')
      .reduce((sum, course) => sum + course.credits, 0),
    requiredCredits: 124,
    categories: {
      general: {
        earned: completedCourses
          .filter((c) => c.category === '総合' && c.grade !== '不可')
          .reduce((sum, c) => sum + c.credits, 0),
        required: 19,
      },
      departmentBasic: {
        earned: completedCourses
          .filter((c) => c.category === '基礎' && c.grade !== '不可')
          .reduce((sum, c) => sum + c.credits, 0),
        required: 20,
      },
      program: {
        earned: completedCourses
          .filter(
            (c) => ['DS', 'IE', 'BA'].includes(c.category) && c.grade !== '不可'
          )
          .reduce((sum, c) => sum + c.credits, 0),
        required: 22,
      },
      exercise: {
        earned: completedCourses
          .filter((c) => c.category === '演習' && c.grade !== '不可')
          .reduce((sum, c) => sum + c.credits, 0),
        required: 8,
      },
      otherDepartment: {
        earned: completedCourses
          .filter((c) => c.category === '他学科' && c.grade !== '不可')
          .reduce((sum, c) => sum + c.credits, 0),
        required: 4,
      },
    },
    programs: {
      ds: {
        requiredCourses: {
          earned: completedCourses
            .filter((c) => c.category === 'DS' && c.grade !== '不可')
            .reduce((sum, c) => sum + c.credits, 0),
          required: 8,
        },
        electiveCourses: {
          earned: 0,
          required: 14,
        },
      },
      ie: {
        requiredCourses: { earned: 0, required: 8 },
        electiveCourses: { earned: 0, required: 14 },
      },
      ba: {
        requiredCourses: { earned: 0, required: 8 },
        electiveCourses: { earned: 0, required: 14 },
      },
    },
  };

  // 計画を含めた進捗状況
  const projectedProgress = {
    totalCredits:
      progress.totalCredits +
      plannedCourses.reduce((sum, course) => sum + course.credits, 0),
    categories: {
      general: {
        earned:
          progress.categories.general.earned +
          plannedCourses
            .filter((c) => c.category === '総合')
            .reduce((sum, c) => sum + c.credits, 0),
        required: 19,
      },
      departmentBasic: {
        earned:
          progress.categories.departmentBasic.earned +
          plannedCourses
            .filter((c) => c.category === '基礎')
            .reduce((sum, c) => sum + c.credits, 0),
        required: 20,
      },
      program: {
        earned:
          progress.categories.program.earned +
          plannedCourses
            .filter((c) => ['DS', 'IE', 'BA'].includes(c.category))
            .reduce((sum, c) => sum + c.credits, 0),
        required: 22,
      },
      exercise: {
        earned:
          progress.categories.exercise.earned +
          plannedCourses
            .filter((c) => c.category === '演習')
            .reduce((sum, c) => sum + c.credits, 0),
        required: 8,
      },
      otherDepartment: {
        earned:
          progress.categories.otherDepartment.earned +
          plannedCourses
            .filter((c) => c.category === '他学科')
            .reduce((sum, c) => sum + c.credits, 0),
        required: 4,
      },
    },
  };

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
                {progress.totalCredits} / {progress.requiredCredits} 単位
              </span>
            </div>
            <Progress
              value={calculateProgress(
                progress.totalCredits,
                progress.requiredCredits
              )}
              className="h-2"
            />
            <p className="mt-2 text-sm text-gray-600">
              卒業までにあと {progress.requiredCredits - progress.totalCredits}{' '}
              単位が必要です。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">カテゴリー別進捗</h3>

              <div>
                <div className="flex justify-between mb-1">
                  <span>総合科目</span>
                  <span>
                    {progress.categories.general.earned} /{' '}
                    {progress.categories.general.required} 単位
                  </span>
                </div>
                <Progress
                  value={calculateProgress(
                    progress.categories.general.earned,
                    progress.categories.general.required
                  )}
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>学科基礎科目</span>
                  <span>
                    {progress.categories.departmentBasic.earned} /{' '}
                    {progress.categories.departmentBasic.required} 単位
                  </span>
                </div>
                <Progress
                  value={calculateProgress(
                    progress.categories.departmentBasic.earned,
                    progress.categories.departmentBasic.required
                  )}
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>プログラム科目</span>
                  <span>
                    {progress.categories.program.earned} /{' '}
                    {progress.categories.program.required} 単位
                  </span>
                </div>
                <Progress
                  value={calculateProgress(
                    progress.categories.program.earned,
                    progress.categories.program.required
                  )}
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>演習科目</span>
                  <span>
                    {progress.categories.exercise.earned} /{' '}
                    {progress.categories.exercise.required} 単位
                  </span>
                </div>
                <Progress
                  value={calculateProgress(
                    progress.categories.exercise.earned,
                    progress.categories.exercise.required
                  )}
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>他学科専門科目</span>
                  <span>
                    {progress.categories.otherDepartment.earned} /{' '}
                    {progress.categories.otherDepartment.required} 単位
                  </span>
                </div>
                <Progress
                  value={calculateProgress(
                    progress.categories.otherDepartment.earned,
                    progress.categories.otherDepartment.required
                  )}
                  className="h-2"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                履修計画を含めた進捗
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>総合科目</span>
                    <span>
                      {projectedProgress.categories.general.earned} /{' '}
                      {projectedProgress.categories.general.required} 単位
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${calculateProgress(
                          projectedProgress.categories.general.earned,
                          projectedProgress.categories.general.required
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>学科基礎科目</span>
                    <span>
                      {projectedProgress.categories.departmentBasic.earned} /{' '}
                      {projectedProgress.categories.departmentBasic.required}{' '}
                      単位
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${calculateProgress(
                          projectedProgress.categories.departmentBasic.earned,
                          projectedProgress.categories.departmentBasic.required
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>プログラム科目</span>
                    <span>
                      {projectedProgress.categories.program.earned} /{' '}
                      {projectedProgress.categories.program.required} 単位
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${calculateProgress(
                          projectedProgress.categories.program.earned,
                          projectedProgress.categories.program.required
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>演習科目</span>
                    <span>
                      {projectedProgress.categories.exercise.earned} /{' '}
                      {projectedProgress.categories.exercise.required} 単位
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${calculateProgress(
                          projectedProgress.categories.exercise.earned,
                          projectedProgress.categories.exercise.required
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>他学科専門科目</span>
                    <span>
                      {projectedProgress.categories.otherDepartment.earned} /{' '}
                      {projectedProgress.categories.otherDepartment.required}{' '}
                      単位
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${calculateProgress(
                          projectedProgress.categories.otherDepartment.earned,
                          projectedProgress.categories.otherDepartment.required
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">予測総単位数: </span>
                    {projectedProgress.totalCredits} /{' '}
                    {progress.requiredCredits} 単位
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>履修済み科目一覧</CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilterDialog(true)}
            >
              <Filter className="mr-2 h-4 w-4" />
              フィルター
            </Button>
            <Dialog
              open={showAddCourseDialog}
              onOpenChange={setShowAddCourseDialog}
            >
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  科目を追加
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>科目の追加</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="search">科目を検索</Label>
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="search"
                          placeholder="科目名またはコードで検索"
                          className="pl-8"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {searchResults.length > 0 && (
                    <div className="max-h-[300px] overflow-y-auto border rounded-md">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>科目名</TableHead>
                            <TableHead>区分</TableHead>
                            <TableHead className="text-center">単位</TableHead>
                            <TableHead className="text-right">操作</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {searchResults.map((course) => (
                            <TableRow key={course.code}>
                              <TableCell>
                                <div className="font-medium">{course.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {course.code}
                                </div>
                              </TableCell>
                              <TableCell>{course.category}</TableCell>
                              <TableCell className="text-center">
                                {course.credits}
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => addCompletedCourse(course)}
                                  >
                                    履修済み
                                  </Button>
                                  <Button
                                    size="sm"
                                    onClick={() => addPlannedCourse(course)}
                                  >
                                    履修予定
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}

                  {searchTerm && searchResults.length === 0 && (
                    <div className="text-center py-4 text-muted-foreground">
                      検索結果がありません
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">GPA</h3>
              <div className="text-2xl font-bold text-primary">
                {calculateGPA()}
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>成績評価: 秀(4点)、優(3点)、良(2点)、可(1点)、不可(0点)</p>
            </div>
          </div>

          {/* フィルターダイアログ */}
          <Dialog open={showFilterDialog} onOpenChange={setShowFilterDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>フィルター設定</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>科目タイプ</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="required"
                      checked={filters.showRequired}
                      onCheckedChange={(checked) =>
                        setFilters({
                          ...filters,
                          showRequired: checked === true,
                        })
                      }
                    />
                    <label
                      htmlFor="required"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      必修科目
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="elective"
                      checked={filters.showElective}
                      onCheckedChange={(checked) =>
                        setFilters({
                          ...filters,
                          showElective: checked === true,
                        })
                      }
                    />
                    <label
                      htmlFor="elective"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      選択科目
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="year">年次</Label>
                    <Select
                      value={filters.selectedYear}
                      onValueChange={(value) =>
                        setFilters({ ...filters, selectedYear: value })
                      }
                    >
                      <SelectTrigger id="year">
                        <SelectValue placeholder="すべての年次" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">すべての年次</SelectItem>
                        <SelectItem value="1年次">1年次</SelectItem>
                        <SelectItem value="2年次">2年次</SelectItem>
                        <SelectItem value="3年次">3年次</SelectItem>
                        <SelectItem value="4年次">4年次</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="semester">学期</Label>
                    <Select
                      value={filters.selectedSemester}
                      onValueChange={(value) =>
                        setFilters({ ...filters, selectedSemester: value })
                      }
                    >
                      <SelectTrigger id="semester">
                        <SelectValue placeholder="すべての学期" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">すべての学期</SelectItem>
                        <SelectItem value="前期">前期</SelectItem>
                        <SelectItem value="後期">後期</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">科目区分</Label>
                  <Select
                    value={filters.selectedCategory}
                    onValueChange={(value) =>
                      setFilters({ ...filters, selectedCategory: value })
                    }
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="すべての区分" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">すべての区分</SelectItem>
                      <SelectItem value="総合">総合科目</SelectItem>
                      <SelectItem value="基礎">学科基礎科目</SelectItem>
                      <SelectItem value="DS">データサイエンス</SelectItem>
                      <SelectItem value="IE">情報エンジニアリング</SelectItem>
                      <SelectItem value="BA">ビジネスアナリティクス</SelectItem>
                      <SelectItem value="演習">演習科目</SelectItem>
                      <SelectItem value="他学科">他学科専門科目</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => setShowFilterDialog(false)}>
                    適用
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* 成績編集ダイアログ */}
          <Dialog
            open={showEditGradeDialog}
            onOpenChange={setShowEditGradeDialog}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>成績の編集</DialogTitle>
              </DialogHeader>
              {selectedCourse && (
                <div className="space-y-4 py-4">
                  <div>
                    <h3 className="font-medium">{selectedCourse.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedCourse.code}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade">成績評価</Label>
                    <Select
                      value={selectedGrade}
                      onValueChange={setSelectedGrade}
                    >
                      <SelectTrigger id="grade">
                        <SelectValue placeholder="成績を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="秀">秀 (4.0)</SelectItem>
                        <SelectItem value="優">優 (3.0)</SelectItem>
                        <SelectItem value="良">良 (2.0)</SelectItem>
                        <SelectItem value="可">可 (1.0)</SelectItem>
                        <SelectItem value="不可">不可 (0.0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setShowEditGradeDialog(false)}
                    >
                      キャンセル
                    </Button>
                    <Button onClick={updateGrade}>保存</Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* 年次ごとにグループ化された履修済み科目一覧 */}
          {Object.keys(groupedCompletedCourses).length > 0 ? (
            <div className="space-y-6">
              {Object.entries(groupedCompletedCourses).map(
                ([year, courses]) => (
                  <div key={year}>
                    <h3 className="text-lg font-semibold mb-2">{year}</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>科目コード</TableHead>
                            <TableHead>科目名</TableHead>
                            <TableHead>区分</TableHead>
                            <TableHead className="text-center">
                              単位数
                            </TableHead>
                            <TableHead className="text-center">学期</TableHead>
                            <TableHead className="text-center">成績</TableHead>
                            <TableHead className="text-center">操作</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {courses.map((course) => (
                            <TableRow key={course.code}>
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
                              <TableCell className="text-center">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => {
                                    setSelectedCourse(course);
                                    setSelectedGrade(course.grade);
                                    setShowEditGradeDialog(true);
                                  }}
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              表示する科目がありません。フィルター設定を変更するか、科目を追加してください。
            </div>
          )}

          {/* 履修予定科目 */}
          {plannedCourses.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">履修予定科目</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>科目コード</TableHead>
                      <TableHead>科目名</TableHead>
                      <TableHead>区分</TableHead>
                      <TableHead className="text-center">単位数</TableHead>
                      <TableHead className="text-center">年次</TableHead>
                      <TableHead className="text-center">学期</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {plannedCourses.map((course) => (
                      <TableRow key={course.code}>
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
                          {course.year}
                        </TableCell>
                        <TableCell className="text-center">
                          {course.semester}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
