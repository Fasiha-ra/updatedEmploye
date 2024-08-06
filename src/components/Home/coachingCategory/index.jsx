import React, { useState, useEffect } from "react";
import { CoachingWrapper } from "./CoachingCategory.styles";
import { Coaching } from '../../Constant/Data';
import { useSearch } from "../../SearchContext/index"; // Import useSearch

const CoachingCategory = ({ coachingCategory }) => {
  const { searchTerm } = useSearch(); // Get searchTerm from context
  const [filteredCoachingCategory, setFilteredCoachingCategory] = useState([]);

  useEffect(() => {
    console.log('CoachingCategory:', coachingCategory); // Log coachingCategory
    console.log('SearchTerm:', searchTerm); // Log search term
    
    if (Array.isArray(coachingCategory)) {
      setFilteredCoachingCategory(
        coachingCategory.filter(category =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredCoachingCategory([]);
    }
  }, [searchTerm, coachingCategory]);

  return (
    <CoachingWrapper>
      <div className="headingWrap">Coaching Category</div>
      <div className="coachingHolder">
        {filteredCoachingCategory.length > 0 ? (
          filteredCoachingCategory.map((value, index) => (
            <div className="coachingCard" key={index}>
              <img src={Coaching[index]?.img || ''} alt={value.name} />
              <strong>{value.name}</strong>
            </div>
          ))
        ) : (
          <p>No coaching categories found matching the search criteria.</p>
        )}
      </div>
    </CoachingWrapper>
  );
};

export default CoachingCategory;
