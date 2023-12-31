import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const HastaListe = ({ hastalar, setHastalar, doktorlar }) => {


  const handleDoubleClick = (patient) => {

    const updatedHastalar = hastalar.map((hst) =>
      hst.id === patient.id ? { ...hst, isDone: !hst.isDone } : hst
    );

    localStorage.setItem('hastalar', JSON.stringify(updatedHastalar));

    setHastalar(updatedHastalar);
  };

  // console.log(hastalar);
  return (
    <div className="hastalar">
      {/* doktorlar dizisi 4 elemanlıysa bütün hastalar basılır, doktor dizisi tek elemanlı olduğunda ise o doktorun ismiyle doktoru eşleşen hastalar basılır */}
      {hastalar.map((patient) => (
        <div key={patient.id}>
          {doktorlar.map(
            (a) =>
              a.doctorName === patient.myDoctor && (
                <div
                  key={a.id}
                  className={patient.isDone ? "trueBittiStil" : "falseBitmediStil"}
                  onDoubleClick={() => handleDoubleClick(patient)}
                >
                  <div>
                    <h2>{patient.text} </h2>
                    <h4>{patient.day} </h4>
                    <h3>{patient.myDoctor} </h3>
                  </div>

                  <FaTimesCircle
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      setHastalar(hastalar.filter((a) => a.id !== patient.id))
                      localStorage.setItem("hastalar", JSON.stringify(hastalar.filter((a) => a.id !== patient.id)))
                    }}
                  />
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default HastaListe;




//  <div>
//    {hastalar.map(({ id, text, day, doktorum, bittiMi }) => (
//      <div key={id}>
//        {doktorlar.length === 4 ? (
//          <div
//            onDoubleClick={() =>
//              setHastalar(
//                hastalar.map((hst) =>
//                  hst.id === id ? { ...hst, bittiMi: !hst.bittiMi } : hst
//                )
//              )
//            }
//            className={bittiMi ? "trueBittiStil" : "falseBitmediStil"}
//            //  hastalar dizisinde dolaş,her bir hastanın id sine bak, benim tıkladığım id ile eşleşen objeyi al, objenin diğer keyleri aynen dursun (...hst ile yaptık) sadece bittiMi key li değeri, true ise false, false ise true olsun
//          >
//            <div>
//              <h2>{text}</h2>
//              <h4>{day}</h4>
//              <h3>{doktorum}</h3>
//            </div>
//            <FaTimesCircle
//              style={{ color: "red" }}
//              onClick={() => setHastalar(hastalar.filter((a) => a.id !== id))}
//            />
//          </div>
//        ) : (
//          doktorlar[0].doktor === doktorum && (
//            <div
//              onDoubleClick={() =>
//                setHastalar(
//                  hastalar.map((hst) =>
//                    hst.id === id ? { ...hst, bittiMi: !hst.bittiMi } : hst
//                  )
//                )
//              }
//              className={bittiMi ? "trueBittiStil" : "falseBitmediStil"}
//              //  hastalar dizisinde dolaş,her bir hastanın id sine bak, benim tıkladığım id ile eşleşen objeyi al, objenin diğer keyleri aynen dursun (...hst ile yaptık) sadece bittiMi key li değeri, true ise false, false ise true olsun
//            >
//              <div>
//                <h2>{text}</h2>
//                <h4>{day}</h4>
//                <h3>{doktorum}</h3>
//              </div>
//              <FaTimesCircle
//                style={{ color: "red" }}
//                onClick={() => setHastalar(hastalar.filter((a) => a.id !== id))}
//              />
//            </div>
//          )
//        )}
//      </div>
//    ))}
//  </div>;