import React from "react";
import Category from "./Category";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, useMediaQuery } from "@material-ui/core";
import { selectUser } from "../../redux/slices/userSlice";
import "./Categories.css";
import CategoriesRow from "./CategoriesRow";

const CategoriesRow1 = () => {
  const currentUser = useSelector(selectUser);
  const isBelow500px = useMediaQuery("(max-width:500px)");

  return (
    <div className="categories__row1Container">
      <CategoriesRow className="categories__row1">
        {currentUser && (
          <Category
            specialBlocksCat
            specialBlocksCatTitle="Recommendations for you"
            needBlocksInCategory
            blockName1="Sweat shirts"
            blockName2="Joggers"
            blockName3="Cardigans"
            blockName4="Easy tees"
            imgSrc1="https://i.ibb.co/NC4rDnS/Fuji-Dash-Women-Fashion-Tees-Quad-Cat-1x-SY116-CB418608878.jpg"
            imgSrc2="https://i.ibb.co/bmmNcv1/Fuji-Dash-Women-Fashion-Cardigans-Quad-Cat-1x-SY116-CB418608722.jpg"
            imgSrc3="https://i.ibb.co/8m0HrhY/Fuji-Dash-Women-Fashion-Joggers-Quad-Cat-1x-SY116-CB418608748.jpg"
            imgSrc4="https://i.ibb.co/Wgpnz4p/41-F9-RVTMUy-L-AC-SY200.jpg"
          />
        )}
        <Category
          categotyTitle="Gaming Accessories"
          imgUrl="https://i.ibb.co/SKXLw4n/g.jpg"
          linkText="Shop our full selection"
        />
        <Category
          categotyTitle="Computers & Accessories"
          imgUrl="https://i.ibb.co/H45ZtjG/cas.jpg"
          linkText="Shop Now"
        />
        <Category
          categotyTitle="Holiday deals"
          imgUrl="https://i.ibb.co/PxPtBY6/hd.jpg"
          linkText="Shop Now"
        />
        {!currentUser && (
          <Grid
            xs={12}
            xs={isBelow500px ? 12 : 6}
            md={3}
            item
            className="signin__promotion flexColumn"
          >
            <div className="signin flexColumn">
              <h3>Sign in for the best experience</h3>
              <Link to="/auth/signin">
                <button>Sign in securely</button>
              </Link>
            </div>

            <div
              style={{
                backgroundImage: `url('https://i.ibb.co/PmJw03C/prom.jpg')`,
              }}
              className="promotion"
            ></div>
          </Grid>
        )}
      </CategoriesRow>
    </div>
  );
};

export default CategoriesRow1;
