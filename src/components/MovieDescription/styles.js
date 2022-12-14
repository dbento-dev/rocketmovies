import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  /* height: 22rem; */

  width: 100%;
  border-radius: 1.6rem;
  padding: 3.2rem;
  /* margin-bottom: 3.2rem; */
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const StTitle = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-right: 8px;
`

export const StParagraph = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  letter-spacing: 0em;
  text-align: left;
  margin: 1.5rem 0;
  text-align: justify;
`
