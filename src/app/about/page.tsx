import ImgHome from "@/components/img";
import React from "react";
const Aboutpagge = () => {
    return (
        <div className=" bg-white mt-24  mb-2 max-w-5xl mx-auto  ">
            <div className="justify-center flex-col pt-20 pb-5 bg-red-100 items-center p5">
                <h1 className="text-center font-semibold text-2xl">Pet–Human Relationships: Dogs versus Cats</h1>
                <p className="p-10">Human–animal interactions have been the focus of research in recent decades,
                    with the primary interest being the dog–owner relationship.
                    The cat–owner relationship has not been as well studied, nor has the comparison
                    between the two types of relationships. To compare these relationships,
                    132 people residing in Mexico who lived with both dogs and cats were evaluated.
                    The results of the study indicate that the perceived relationship that an individual
                    has with cats is better than that with dogs because the perceived cost of the relationship is greater with dogs and the interaction is greater with cats. However,
                    the emotional closeness that occurs in the relationship is greater with dogs.</p>
                <ImgHome />
            </div>

        </div>

    )
}

export default Aboutpagge;