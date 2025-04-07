'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import SectionRenderer from './section-renderer';
import { handbookSections, personalSections } from '@/lib/data';

export default function Handbook() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('top');
  const [currentUserSection, setCurrentUserSection] = useState(null);
  const [tocExpanded, setTocExpanded] = useState(true);
  const [userExpanded, setUserExpanded] = useState(true);
  const [mounted, setMounted] = useState(false);

  const { setTheme, theme } = useTheme();

  // クライアントサイドでのみレンダリングを確認
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSectionChange = (sectionId) => {
    setCurrentSection(sectionId);
    setCurrentUserSection(null);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleUserSectionChange = (sectionId) => {
    setCurrentUserSection(sectionId);
    setCurrentSection(null);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-background border-b border-primary/20 shadow-sm">
        <div className="flex items-center h-16 px-4 mx-auto">
          <div className="flex items-center gap-2 md:w-64">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary hover:bg-primary/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
              <span className="sr-only">メニュー</span>
            </Button>
            <h1 className="text-xl font-bold text-primary text-center md:text-left md:pl-4">
              2025年度 情報科学部便覧
            </h1>
          </div>
          <div className="flex items-center ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-primary hover:bg-primary/10"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">テーマを切り替え</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* モバイルナビゲーション */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 flex md:hidden">
            <div
              className="fixed inset-0 bg-black/20"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative flex flex-col w-full max-w-xs py-4 overflow-y-auto bg-white dark:bg-gray-800 shadow-xl">
              <div className="px-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-primary hover:bg-primary/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                  <span className="sr-only">閉じる</span>
                </Button>

                {/* あなたセクション - モバイル */}
                <div className="mb-4">
                  <Button
                    variant="ghost"
                    className="justify-between w-full mb-2 font-semibold text-primary"
                    onClick={() => setUserExpanded(!userExpanded)}
                  >
                    あなた
                    {userExpanded ? (
                      <ChevronDown className="w-4 h-4 ml-2" />
                    ) : (
                      <ChevronRight className="w-4 h-4 ml-2" />
                    )}
                  </Button>

                  {userExpanded && (
                    <div className="space-y-1 pl-2">
                      {personalSections.map((section) => (
                        <Button
                          key={section.id}
                          variant={
                            currentUserSection === section.id
                              ? 'default'
                              : 'ghost'
                          }
                          className="justify-start w-full"
                          onClick={() => handleUserSectionChange(section.id)}
                        >
                          {section.name}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 目次セクション - モバイル */}
                <div className="mb-4">
                  <Button
                    variant="ghost"
                    className="justify-between w-full mb-2 font-semibold text-primary"
                    onClick={() => setTocExpanded(!tocExpanded)}
                  >
                    目次
                    {tocExpanded ? (
                      <ChevronDown className="w-4 h-4 ml-2" />
                    ) : (
                      <ChevronRight className="w-4 h-4 ml-2" />
                    )}
                  </Button>

                  {tocExpanded && (
                    <div className="space-y-1 pl-2">
                      {handbookSections.map((section) => (
                        <Button
                          key={section.id}
                          variant={
                            currentSection === section.id ? 'default' : 'ghost'
                          }
                          className="justify-start w-full"
                          onClick={() => handleSectionChange(section.id)}
                        >
                          {section.name}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* サイドバーナビゲーション（デスクトップ） */}
        <aside className="hidden md:block w-64 bg-background border-r border-primary/20 sticky top-16 h-[calc(100vh-4rem)] z-30 overflow-y-auto">
          <div className="p-4">
            {/* あなたセクション - デスクトップ */}
            <div className="mb-4">
              <Button
                variant="ghost"
                className="justify-between w-full mb-2 font-semibold text-primary"
                onClick={() => setUserExpanded(!userExpanded)}
              >
                あなた
                {userExpanded ? (
                  <ChevronDown className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-2" />
                )}
              </Button>

              {userExpanded && (
                <div className="space-y-1 pl-2">
                  {personalSections.map((section) => (
                    <Button
                      key={section.id}
                      variant={
                        currentUserSection === section.id ? 'default' : 'ghost'
                      }
                      className="justify-start w-full"
                      onClick={() => handleUserSectionChange(section.id)}
                    >
                      {section.name}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* 目次セクション - デスクトップ */}
            <div className="mb-4">
              <Button
                variant="ghost"
                className="justify-between w-full mb-2 font-semibold text-primary"
                onClick={() => setTocExpanded(!tocExpanded)}
              >
                目次
                {tocExpanded ? (
                  <ChevronDown className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-2" />
                )}
              </Button>

              {tocExpanded && (
                <div className="space-y-1 pl-2">
                  {handbookSections.map((section) => (
                    <Button
                      key={section.id}
                      variant={
                        currentSection === section.id ? 'default' : 'ghost'
                      }
                      className="justify-start w-full"
                      onClick={() => handleSectionChange(section.id)}
                    >
                      {section.name}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* メインコンテンツ */}
        <main className="flex-1 p-4 overflow-x-hidden bg-gray-50 dark:bg-gray-900">
          <SectionRenderer
            section={currentSection}
            userSection={currentUserSection}
          />
        </main>
      </div>
    </div>
  );
}
