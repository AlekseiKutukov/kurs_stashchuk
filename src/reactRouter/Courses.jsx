import courses from '../data/courses';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect, useState } from 'react';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  // console.log(location);
  const query = queryString.parse(location.search);
  // console.log(query);
  const [sortKey, setSortKey] = useState(query.sort);
  //console.log(sortKey);
  //console.log(sortCourses(courses, sortKey));
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>{sortKey ? `Corses sorted by ${sortKey}` : 'Courses'}</h1>

      {sortedCourses.map((cours) => (
        <div key={cours.id}>
          <Link to={cours.slug} className="courseLink">
            {cours.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
