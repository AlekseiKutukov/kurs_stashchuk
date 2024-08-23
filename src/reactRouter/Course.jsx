import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import courses from '../data/courses';
import { useEffect } from 'react';

const Course = () => {
  // чтобы получить адрес текущий страницы (/react или /nodejs)
  const params = useParams();
  // console.log(params);
  //чтобы перенаправлять с несуществующих адресов (/dfhjdh)
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const course = courses.find((course) => course.slug === params.corseSlug);

  // if (!course) {
  //  return <NotFound />;
  // }

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>

      {/* <Link to="/courses">All courses</Link> */}
      {/* можно так или как ниже используя относительные ссылки,
      относительные ссылки предпочтительнее (при измене доmена все будет работать)  */}
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default Course;
