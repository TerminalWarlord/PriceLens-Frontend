import { ButtonGroup } from './ui/button-group'
import { Button } from './ui/button'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';

type Props = {
    hasNextPage: boolean;
}

const Pagination = ({ hasNextPage }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const offset = parseInt(searchParams.get("offset") || "0");
    const hasPrevPage = offset > 0;
    return (
        <ButtonGroup>
            <Button
                disabled={!hasPrevPage}
                variant={'outline'}
                className="cursor-pointer"
                onClick={() => {
                    if (offset > 0) {
                        searchParams.set("offset", Math.max(offset - 10, 0).toString())
                        setSearchParams(searchParams);
                    }
                }}
            >
                <IconArrowLeft />
                <span>Previous</span>
            </Button>
            <Button
                className="cursor-pointer"
                disabled={!hasNextPage}
                variant={'outline'}
                onClick={() => {
                    searchParams.set("offset", (offset + 10).toString())
                    setSearchParams(searchParams);
                }}
            >
                <span>Next</span>
                <IconArrowRight />
            </Button>
        </ButtonGroup>
    )
}

export default Pagination