import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  background-color: ${({ theme }) => theme.bgLighter};
  z-index: 1000;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.soft2};
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.soft2};
  padding: 5px;
  &:focus-within {
    box-shadow: 0px 0px 5px ${({ theme }) => theme.primary};
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  padding: 10px;
  background-color: ${({ theme }) => theme.bgDark};
  outline: none;
  color: ${({ theme }) => theme.text};
  &::placeholder {
    color: ${({ theme }) => theme.softText};
  }
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3ea6ff;
    color: white;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon style={{ marginRight: "12px", marginLeft: "12px", cursor: 'pointer' }} />
        </Search>

        {currentUser ? (
          <User>
            <VideoCallOutlinedIcon style={{ cursor: "pointer" }} />
            <Avatar src={currentUser.img || "/default-avatar.png"} alt="avatar" />
          </User>
        ) : (
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon /> Sign In
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
