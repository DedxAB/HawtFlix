import { useState } from "react";
import "./style.scss";
const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSetselectedTab] = useState(0); //we pass index of selected tab

  const [left, setLeft] = useState(0); //this is for moving background animation & left is besically a div, and we just move it to right of left

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSetselectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            onClick={() => activeTab(tab, index)}
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
          >
            {tab}
          </span>
        ))}
        {/* <span className="movingBg" style={{ left: left }} />  */}
        {/* here in the style key and value is same so we can write like this  */}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
