"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroPageProps {
  title: string;
  image: string;
}

export default function HeroPage({ image, title }: HeroPageProps) {
  return (
    <>
      <div className="relative h-[60vh] z-0">
        <div className="relative w-full h-[60vh] z-10 bg-amber-200/10"/>
        <Image
          className="absolute object-cover"
          src={image}
          alt={title}
          fill
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCACiAPMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCOiiioOoKWkooAWiiikAUUUUAFFFFIAooopCEooooEFFFFMliUUUUyWFFFFUSFFFFMkKWkopgLS0lFMBaKSloAWikooAWikooGJRRRWZ0BRRRQAUUUUgFopKKAFopKKQBRRRQIKKKKBBSUtJTJYUUUUyWFJRRTEFFJRTJFopKM0xDqKbmjNMB2aXNNzRmgY7NGabmjNMB2aKbmigBaKKKyOgWikopALRRRQAUUUUAFFFFIAooooEFFFFMQlFLSUCCkpaSqJYUlFFMkKSikpki5ozSUmaYh2aM03NJmmA/NGaZmjNAx+aM0zNGaBj80UzNFAE1FFFYm1wopaKAuFFFFAXCiiigdwoopaBCUUtFACUUtJTEFJS0UyRKSlopiG0UtJTJEpKWmmmIKSg0hpkhmkzSGkJphcXNGaZmkzRYLj80bqjzRmnYdyTdRUWaKLBc0KKWiuc2EopaKAEopaKACiilpjEopaKAEopaKBCUUtFMQlFLRTENpKdRigQ2kp2KTFMQw0hp5FNIpkjDSGnkU0imIYaYakIppFMljKSnEU00wEpKXFJigoSilxRTA06KXFGK5zYSilxRigBKKdijFADaWlxRigBKKWjFMBKKWlxQA2jFOxRimIbijFOxRigBuKTFOxRimIZijFOxRigQzFNIqTFJimIjIppFSEUhFAiMimkVKRTSKYiIrTStSkUhWncLEOKTFTbaTbRcViLFFS7aKLjsX8UYp2KMVkajcUYp2KMUANxRinYoxQMbRinYoxQA3FLilxRQAmKMUuKMUxCYoxS4pcUANxRinYoxQIbijFOxRimIZijFOxRigBmKTFPxSYpiGYpMVJikxQBGRTSKlxTcUARkUmKkxRigCLbSbalxSYoAj20VJiigC1ijFOxRioNBtGKdiigBuKKWigBMUYpaKAEopaKBCYpaWimAmKMUtFACYoxTqMUCExSYp2KMUwG4oxTsUYoEMxRinYoxQAzFJin4oxQBHikxUmKTFAhmKTFPxRimBHijFPxRigBmKKfiigCailoqDQSilooASilpKAEopaKAEpaKKYgopaKAEpaKWgBKKWigQlFLS0wG4oxTqKBDcUYpaKAG4oxTsUmKAG4pMU7FGKAG4pMU7FGKAGYoxTsUYoAbiinYooAkoooqSwooooASilooASilpKACiilpgJS0UUCCiiloAKKKKBBRS0UwEopaKAEopaKBCUlLRQAlJS0UAJSUtFACUUtJQAlFLRQA6iiipLCiiigAooooAKSiimAtFFFABRRRQIKWiigApaKKBBRRRTAKKKKACiiigQlFFFABSUUUAJRRRQAUUUUAJRRRQB//Z"
          priority
        />

        <motion.div
          className="absolute top-[40%] left-[10%] z-20"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-white font-bold text-4xl md:text-6xl mb-5">
            {title}
          </h1>
        </motion.div>
      </div>
    </>
  );
}
