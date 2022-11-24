import {connect} from 'react-redux';
import { addToCart } from '../services/actions/Action'; 
import Home from "../components/Home"
const mapStateToProps=state=>({

})
const mapDispatchToProps =dispatch=>({
    addToCardHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)




// export default Home;