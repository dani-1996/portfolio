import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles"
import {Box }from "@material-ui/core/";
import Paper from '@material-ui/core/Paper'

import "../App.css"



const Project = ({
    projectNumber,projectName,
    firstDescription, 
    secondDescription,
    thirdDescription,
    fourthDescription,
    image,
    link,
    additionalText
    }) => {

    const descriptionList = [firstDescription, secondDescription,thirdDescription,fourthDescription,]
    const WhiteTextTypography = withStyles({
        root: {
          color: "rgb(36, 139, 170)"
        }
      })(Typography)


      const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '20px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
    return (
        // <div classNameName="project" >
        //     <div  className="fadein project-box ">
      
       <div>

        <div className="abstand" ></div>



  
		
	
	
	
			
        <Grid className="container" container
        direction="column"
        justifyContent="flex-start"
        alignItems="center" >

 <Card className="card">
      <CardContent>
      
            <Grid  container direction="column" justifyContent="flex-start" alignItems="center" >
            <Grid > <Typography variant="h2"   > Projekt {projectNumber} </Typography></Grid>
               <Grid > <WhiteTextTypography color="inherit" variant="h3" > {projectName} </WhiteTextTypography></Grid>
            </Grid>

           <Grid container spacing={4} direction="row" justifyContent="space-around" alignItems="center">
                <Grid item xs  md={3}  lg={3}><Typography color="primary" variant="body" >{additionalText}</Typography></Grid>
                <Grid item xs={12}  md={3}  lg={3}> <a  target="_blank"href={link} >  <img className="image" src={image}/></a>   </Grid>
                <Grid item xs  md={3}  lg={3} >{descriptionList.map((item)=>(<Typography variant="h4" color="secondary" >{item}</Typography>))} </Grid>
                <Grid  container direction="column" justifyContent="flex-start" alignItems="flex-start">
        </Grid>
           </Grid>
           

        

           
        
        <CardActions>
      <Button  target="_blank" href={link}  size="large" variant="contained" color="primary"><WhiteTextTypography color="secondary"
                variant="h3">zum Projekt</WhiteTextTypography>  </Button> 
      </CardActions>        
      </CardContent>
     
    </Card>
</Grid>
        
    </div>  
    

        

       

           


                
                
                 

            
            
        
       
   
    )
}

export default Project
