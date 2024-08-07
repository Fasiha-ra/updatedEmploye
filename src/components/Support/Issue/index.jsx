import React, { useEffect, useState } from 'react';
import { IssuesWrap } from './Issues.styles';
import { SupportIssue } from '../../Constant/Data';
import { useSearch } from '../../SearchContext/index'; // Import useSearch

const Issues = ({ click = () => {} }) => {
  const { searchTerm } = useSearch(); // Get searchTerm from context
  const [filteredIssues, setFilteredIssues] = useState([]);

  useEffect(() => {
    // Filter issues based on the search term
    setFilteredIssues(
      SupportIssue.filter(issue =>
        issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.para.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <IssuesWrap>
      <h4>What issue are you having?</h4>
      <div className="cardHolder">
        {filteredIssues.length > 0 ? (
          filteredIssues.map((value, index) => (
            <div className="card" key={index} onClick={() => click()}>
              <img src={value.img} alt="support" />
              <h4>{value.title}</h4>
              <p>{value.para}</p>
            </div>
          ))
        ) : (
          <p>No issues found matching the search criteria.</p>
        )}
      </div>
    </IssuesWrap>
  );
};

export default Issues;
