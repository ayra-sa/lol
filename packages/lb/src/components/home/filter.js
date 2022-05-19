import { styled } from "frontity"

const Filter = () => {
    return (
        <FilterWrap>
            <FilterGames>
              <span>World of Warcraft</span>
            </FilterGames>
            <FilterGames>
              <span>World of Warcraft</span>
            </FilterGames>
            <FilterGames>
              <span>World of Warcraft</span>
            </FilterGames>
            <FilterGames>
              <span>World of Warcraft</span>
            </FilterGames>
            <FilterGames>
              <span>World of Warcraft</span>
            </FilterGames>
            <FilterGames>
              <span>World of Warcraft</span>
            </FilterGames>
          </FilterWrap>
    )
}

export default Filter

const FilterWrap = styled.div`
  background: var(--card);
  border-radius: 20px;
  display: flex;
  margin: 40px 0 60px 0;
  width: 100%;
  overflow: scroll;
  `

const FilterGames = styled.div`
  padding: 24px 50px;
  white-space: nowrap;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1.15em;
  line-height: 32px;
  color: var(--text-medium);

  &:nth-child(1) {
    background: var(--primary-default);
    color: #fff;
    font-weight: 700;
  }
`