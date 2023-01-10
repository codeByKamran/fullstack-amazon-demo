import React from "react";
import { Grid, makeStyles, Chip } from "@material-ui/core";
import { GitHub, Twitter, Language, LinkedIn } from "@material-ui/icons";

import "./CopyrightFooter.css";

const useStyles = makeStyles(() => ({
  footerSection: {
    padding: "1rem",
    backgroundColor: "#131A22",
  },

  chip: {
    padding: "0 5px",
  },
}));

console.log(process.env.DB_HOST);

const CopyrightFooter = () => {
  const c = useStyles();
  return (
    <div
      className={`footerSection ${c.footerSection}`}
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Heading2 className="footerSection__heading">
            Design and developed by Azhar Zaman
          </Heading2>
        </Grid>
        <Grid item container spacing={1} justifyContent="center">
          <MuiChip
            link="https://azharzaman.com"
            title="Website"
            icon={<Language fontSize="small" />}
          />
          <MuiChip
            link="https://github.com/azharzaman1"
            title="Github"
            icon={<GitHub fontSize="small" />}
          />
          <MuiChip
            link="https://www.linkedin.com/in/azhar-zaman/"
            title="LinkedIn"
            icon={<LinkedIn fontSize="small" />}
          />
          <MuiChip
            link="https://twitter.com/DrAzharZaman"
            title="Twitter"
            icon={<Twitter fontSize="small" />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export const Heading2 = ({ children, className }) => {
  return <h4 className={`MuiHeading2 ${className}`}>{children}</h4>;
};

export const MuiChip = ({
  title,
  icon,
  size,
  unclickable,
  color,
  variant,
  link,
}) => {
  const c = useStyles();
  return (
    <Grid item>
      <a href={link} target="_blank" rel="noreferrer">
        <Chip
          label={title}
          icon={icon}
          size={size ? size : "medium"}
          clickable={unclickable ? false : true}
          color={color ? color : "secondary"}
          variant={variant ? variant : "outlined"}
          className={`${c.chip}`}
        />
      </a>
    </Grid>
  );
};

export default CopyrightFooter;
