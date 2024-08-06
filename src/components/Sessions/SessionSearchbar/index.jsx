import React from 'react'
import {SearchbarHolder} from './SessionSearchbar.styles'
import Button from '../../Button'
import { FaAngleRight } from "react-icons/fa6";
import SearchBar from '../../TextField/SearchBar';
const SessionSearchbar = () => {
  return (
    <SearchbarHolder>
        <Button type="white" width="209px">Filter <FaAngleRight /></Button>
        <div className="searchbar">
          <SearchBar />
        </div>
    </SearchbarHolder>
  )
}

export default SessionSearchbar