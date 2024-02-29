"use client";

import React, { useState } from "react";
import SolveWorkbookCard from "./SolveWorkbookCard";
import CategoryTab from "./CategoryTab";
import WorkbookInfoModal from "../WorkbookInfoModal";
import WorkbookListItem from "../WorkbookListItem";

const WorkbookListView = () => {
  const [currentTab, setCurrentTab] = useState("bookmarked");
  const [bookmarkedContent, setBookmarkedContent] = useState([]);
  const [popularContent, setPopularContent] = useState([]);
  const [realtimeContent, setRealtimeContent] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case "bookmarked":
        return (
          <BookmarkedTabContent
            handleModalOpen={handleModalOpen}
            content={bookmarkedContent}
          />
        );
      case "popular":
        return (
          <PopularTabContent
            handleModalOpen={handleModalOpen}
            content={popularContent}
          />
        );
      case "realtime":
        return (
          <RealtimeTabContent
            handleModalOpen={handleModalOpen}
            content={realtimeContent}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-[36px]">
      <div className="flex gap-[64px] text-[32px] font-[700]">
        <CategoryTab
          handleTabChange={handleTabChange}
          tabType="bookmarked"
          currentTab={currentTab}
          contentCount={bookmarkedContent.length}
          label="찜한 문제집"
        />
        <CategoryTab
          handleTabChange={handleTabChange}
          tabType="popular"
          currentTab={currentTab}
          contentCount={popularContent.length}
          label="인기 문제집"
        />
        <CategoryTab
          handleTabChange={handleTabChange}
          tabType="realtime"
          currentTab={currentTab}
          contentCount={realtimeContent.length}
          label="찜한 문제집"
        />
      </div>
      <div className="tab-content">{renderTabContent()}</div>
      <div className="flex justify-center mt-[44px] ">
        <button className="rounded-[999px] px-[52px] py-[10px] text-[28px] font-[600] border border-[#A1A1A1]">
          문제 더보기
        </button>
      </div>
      {isModalOpen && <WorkbookInfoModal onClose={handleModalClose} />}
    </div>
  );
};

type ContentProps = {
  content: Array<any>;
  handleModalOpen: () => void;
};

const BookmarkedTabContent = ({ content, handleModalOpen }: ContentProps) => {
  return (
    <div className="flex flex-col gap-[56px]">
      <div className="flex flex-wrap gap-[20px]">
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
      </div>
      <div className="flex flex-wrap gap-[20px]">
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
      </div>
    </div>
  );
};

const PopularTabContent = ({ content, handleModalOpen }: ContentProps) => {
  return (
    <div className="flex flex-col gap-[56px]">
      <div className="flex flex-wrap gap-[20px]">
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
      </div>
      <div className="flex flex-wrap gap-[20px]">
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
        <SolveWorkbookCard handleModalOpen={handleModalOpen} />
      </div>
    </div>
  );
};

const RealtimeTabContent = ({ content, handleModalOpen }: ContentProps) => {
  return (
    <>
      <WorkbookListItem />
      <WorkbookListItem />
      <WorkbookListItem />
      <WorkbookListItem />
      <WorkbookListItem />
      <WorkbookListItem />
      <WorkbookListItem />
    </>
  );
};

export default WorkbookListView;
