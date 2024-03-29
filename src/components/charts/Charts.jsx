import { Barchart } from "./chartstype/Barchart";
import { Piechart } from "./chartstype/Piechart";

export const Charts = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <Barchart />
            </div>
            <div className="col-md-6">
                <Piechart />
            </div>
        </div>
    )

}