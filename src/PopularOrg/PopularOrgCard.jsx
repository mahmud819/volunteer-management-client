import React from 'react';
import * as motion from "motion/react-client"
const PopularOrgCard = ({data}) => {
    const{organization_name,organization_logo,working_country
, working_type,established_year} = data;
    // console.log(data)
    return (
        
        <motion.div whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
         className="p-4 rounded-lg card-compact bg-base-100 w-[100%] shadow-xl">
              <figure>
                <img className="rounded-lg"
                  src={organization_logo}
                  alt="photo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{organization_name}</h2>
                
                
                <h1 className="text-left text-sm">Working Country : {working_country} </h1>
                <h1 className="font-bold text-left">Working type : {working_type}</h1>
               
                
                    
                    <h1 className="font-bold text-md">Estabalishin year : {established_year} </h1>
                
            
                </div>
              </motion.div>
            
    )
};

export default PopularOrgCard;