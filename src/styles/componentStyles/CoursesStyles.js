import styled from 'styled-components';

export const CoursesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 80px 0 250px 0;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
    /* padding: 80px 0 250px 0; */
  }
`;
export const CourseH1 = styled.h1`
  text-align: center;
  font-size: 30px;
  @media (max-width: 500px) {
    font-size: 20px;
  } ;
`;
export const CourseTitleDiv = styled.div`
  padding: 50px 0px;
  @media (max-width: 500px) {
    padding: 30px 0px;
  } ;
`;
