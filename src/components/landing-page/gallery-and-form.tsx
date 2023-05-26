import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z, type ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/utils/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type FormValues = {
  name: string;
  person: number;
  rsvp: boolean;
};

export default function GalleryAndForm() {
  const schema: ZodType<FormValues> = z.object({
    name: z.string().min(2),
    person: z.number().max(5),
    rsvp: z.boolean(),
  });

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const { mutate } = api.invitees.create.useMutation({
    onSuccess: () => {
      console.log("success");
      // setInput("");
      // void ctx.invitees.getAll.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      if (errorMessage && errorMessage[0]) {
        console.error(errorMessage[0]);
      } else {
        console.error("Failed to post! Please try again later.");
      }
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data);

    void MySwal.fire({
      title: "Terima kasih",
      text: `${data.rsvp ? "Kami tunggu kehadirannya" : "Mohon doa restu"}`,
      confirmButtonColor: "#BD908A",
      confirmButtonText: "Tutup",
    }).then((_res) => {
      reset();
      setValue("person", 1);
    });
  };

  const [iAttend, setIAttend] = useState(true);
  const [showBank, setShowBank] = useState(false);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    setIAttend(true);
    setValue("person", 1);
    setValue("rsvp", true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowBankAccount = (cond: boolean) => {
    setShowBank(!cond);
  };

  const handleChangeAttendVal = (val: boolean) => {
    setIAttend(!val);
    if (val) {
      setValue("person", 0);
    } else {
      setValue("person", 1);
    }
    setValue("rsvp", !iAttend);
  };

  const galleries = [
    "/img/gallery/gallery-1.jpg",
    "/img/gallery/gallery-2.png",
    "/img/gallery/gallery-3.png",
    "/img/gallery/gallery-4.png",
    "/img/gallery/gallery-5.jpg",
    "/img/gallery/gallery-6.jpg",
    "/img/gallery/gallery-7.jpg",
    "/img/gallery/gallery-8.jpg",
    "/img/gallery/gallery-9.jpg",
    "/img/gallery/gallery-10.jpg",
  ];

  return (
    <section className="gallery-and-egiving relative flex flex-col items-center bg-yi-sage">
      <div className="relative">
        <div className="slider">
          <div className="slider-track flex animate-scroll">
            {galleries.map((v, i) => {
              return (
                <Image
                  key={i}
                  src={v}
                  width={200}
                  height={100}
                  unoptimized={true}
                  alt={`gallery-${i}`}
                  className="slide mx-[6px]"
                />
              );
            })}

            {galleries.map((v, i) => {
              return (
                <Image
                  key={i}
                  src={v}
                  width={200}
                  height={100}
                  unoptimized={true}
                  alt={`gallery-${i}`}
                  className="slide mx-[6px]"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="egift flex flex-col items-center justify-center font-Itim text-white">
        <button
          onClick={() => handleShowBankAccount(showBank)}
          className={`${
            showBank ? "" : "mb-10"
          } my-5 h-9 w-48 rounded-md bg-yi-rose`}
        >
          Electronic Giving
        </button>
        <div className={`${showBank ? "block" : "hidden"} text-center text-sm`}>
          <div className="flex flex-col">
            <span>Transfer via mandiri</span>
            <span className="text-lg">1110013658923</span>
            <span>Yuni</span>
          </div>
          <div className="my-3 flex flex-col">
            <span>Transfer via mandiri</span>
            <span className="text-lg">1090017506718</span>
            <span>Indra Putra</span>
          </div>
        </div>
      </div>
      <div className="rsvp relative w-96 px-5 font-ViaodaLibre text-white">
        <Image
          src={"/img/border-flower-3.svg"}
          width={150}
          height={200}
          unoptimized={true}
          alt="border flower"
          className="absolute right-[120px] top-[20px]"
        />
        <div className="mt-20 text-center">
          <span className="text-2xl">RSVP</span>
          <span className="block font-Itim text-sm">
            Bantu kami mempersiapkan jamuan yang hangat untuk anda semua dengan
            mengirimkan konfirmasi kehadiran melalui form berikut ini
          </span>
        </div>
        <form
          className="mb-10 flex flex-col"
          onSubmit={(event) => {
            void handleSubmit(onSubmit)(event);
          }}
        >
          <div className="mb-4 flex flex-col">
            <label>Nama</label>
            <input className="h-9 px-3 text-black" {...register("name")} />
            {errors?.name && (
              <span className="mt-1 font-Itim text-xs text-yi-rose">
                {errors.name.message}
              </span>
            )}
          </div>

          <label>Hadir</label>
          <div className="mb-6 flex flex-col">
            <div className="flex flex-row gap-1 ">
              <div
                className={`
                  flex h-9 w-full items-center justify-center rounded-md text-center
                  ${iAttend ? "bg-yi-rose" : "border-2 border-yi-white"}
                `}
                onClick={() => handleChangeAttendVal(false)}
              >
                Hadir
              </div>
              <div
                className={`
                  flex h-9 w-full items-center justify-center rounded-md text-center
                  ${
                    iAttend === false
                      ? "bg-yi-rose"
                      : "border-2 border-yi-white"
                  }
                `}
                onClick={() => handleChangeAttendVal(true)}
              >
                Tidak Hadir
              </div>
            </div>
            <input type="hidden" {...register("rsvp")} />
          </div>

          <div className="mb-4 flex flex-col">
            <label>Jumlah yang hadir</label>
            <input
              className="h-9 px-3 text-black"
              type="number"
              disabled={!iAttend}
              {...register("person", { valueAsNumber: true })}
            />
            {errors?.person && (
              <span className="mt-1 font-Itim text-xs text-yi-rose">
                {errors.person.message}
              </span>
            )}
          </div>

          <div className="flex w-full justify-center font-Itim">
            <button
              type="submit"
              className="block h-9 w-48 rounded-lg bg-yi-rose"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
