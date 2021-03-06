import styled from 'styled-components'

const StyledHeader = styled.div`
    
    .container{
        padding:30px;
        font-size:2rem;
        display: flex;
        justify-content: space-around;
        font-weight:800
    }
    a:focus{
        color:blue;
    }
    a{
        color:#74b9ff;
        border-radius:5px;
    }
    
    a:hover{
        color: #00b894;
        transition: 0.3s ease; 
    }
    
    
`

export default StyledHeader