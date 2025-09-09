import Usp from './Usp'
import uspData from '../data/uspData'

const UspSection = () => {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {uspData.map((usp, idx) => (
                    <Usp key={idx} icon={usp.icon} label={usp.label} description={usp.description} />
                ))}
            </div>
        </div>
    )
}

export default UspSection
