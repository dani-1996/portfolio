import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "../App.css"



const Project = ({projectNumber,projectName,
    firstDescription, 
    secondDescription,
    thirdDescription,
    fourthDescription,
    image,
    link}) => {

    const descriptionList = [firstDescription, secondDescription,thirdDescription,fourthDescription,]

    return (
    
        <div  className="project fadein ">
            
                <Grid className="project-description" item xs={4}>
                 <Typography className="typo" variant="h3"   >{projectNumber}</Typography>
                    <Typography color="primary" variant="h3" >{projectName}</Typography>
                    {descriptionList.map((item)=>(

                        <Typography className="typo" variant="h5" color="secondary" >{item}</Typography>
                    ))}
            </Grid>
  
            <Grid item xs={8}>
              <div className="project-image" ><a  target="_blank"href={link} ><img classname="project-image"src={image}/></a></div> 
              
           <Button  target="_blank"href={link}className= "btn" size="large" color="secondary">Zum Projekt  </Button>
          
            </Grid>
           
       
        </div>
    )
}

export default Project
