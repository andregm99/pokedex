import { Container, Skeleton } from "@mui/material";

export default function Carregamento(){
    return(
        <Container maxWidth="xl">
            <Skeleton variant="rounded" width="100%" height={150} />
            <Skeleton variant="rounded" width="100%" height={150} />
            <Skeleton variant="rounded" width="100%" height={150} />
        </Container>
    )
}