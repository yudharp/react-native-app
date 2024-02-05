import React from 'react';
import {Image,View} from 'react-native';

const BasicImage = () =>{
    return(
        <View>
            <Image
            source={{
                uri : "https://www.google.com/search?sca_esv=c6ea4b9e8e44c565&sxsrf=ACQVn0_sUEzYk2bnHdjAYmxF0NIZBdwKTw:1707125908901&q=solo&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjx74vL85OEAxW-T2wGHbm3AvsQ0pQJegQIDRAB&biw=1707&bih=801&dpr=0.8#imgrc=dJXiwtUj_229GM",
            }}
            style ={{width: 200, height: 200}}
            />           
        </View>
    );
};

export default BasicImage;