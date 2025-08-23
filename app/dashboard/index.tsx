"use client";
//import CreateEventForm from '@/components/EventCreationForm'
import EventsOperations from "@/components/EventsOperations";
import ProfileCard from "@/components/ProfileCard";
//import Statistics from '@/components/Statistics'
import Image from "next/image";
import Button from "@/components/ui/Button";
import React from "react";
import InputField from "@/components/ui/InputFields";
import Label from "@/components/ui/Label";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import useAxios from "../hooks/useAxios";
import Dropdown from "@/components/ui/DropDown";
import ImageUploader from "@/components/ImageUploader";
import { TiTick } from "react-icons/ti";
import { useState, useEffect } from "react";
import { MdClear } from "react-icons/md";

//import { images } from "@/constant/images";

const CreateEvent = () => {
  const { sendRequest, loading, setLoading } = useAxios();
  const router = useRouter();
  const { user, setUser, setRole } = useUser();

  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);

  const [info1, setInfo1] = useState<string | null>(null);
  const [info2, setInfo2] = useState<string | null>(null);
  const [payoutError, setPayoutError] = useState("");
  const [deletePopup, setDeletePopup] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [withdrawalAmount, setWithdrawalAmount] = useState <number | null>(null);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const [bankList, setBankList] = useState([]);
  const [updatingWitdrawalDetails, setUpdatingWithdrwalDetails] =
    useState(false);
  const [payoutDetails, setPayoutDetails] = useState({
    bank_id: "",
    bank_name: "",
    account_name: "",
    account_number: "",
    bank_code: "",
  });


  const fetchBanks = async () => {
    try {
      setLoading(true);
      //console.log("Fetching supported banks...");s

      const response = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/payouts/supported-banks`,
        method: "GET",
        headers: { Authorization: `Bearer ${user?.token}` },
      });

      if (response?.status === "success") {
        setBankList(response.data || []);
      }
      //console.log("Supported banks fetched successfully:", response.data);
    } catch (error) {
      //console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  if (user?.payoutDetails) {
    fetchBanks(); // fetch once if payoutDetails exist
  }
}, [user]);

useEffect(() => {
  if (!user?.payoutDetails || bankList.length === 0) return;

  const { account_number, account_name, bank_name} = user.payoutDetails;

  const currentBank = (bankList as any[]).find((bank) => bank.name === bank_name);

  //console.log(currentBank, " - current bank");

  if (account_number && currentBank) {
    setPayoutDetails({
      bank_id: currentBank.id,
      bank_name: currentBank.name,
      account_name: account_name || "",
      account_number: account_number || "",
      bank_code: currentBank.code || "",
    });

    //console.log ("initial payout details - " , payoutDetails)
  }
}, [bankList, user]);

  const onpayoutDetailsChange = (name: string, value: any) => {
    setPayoutDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    //console.log("Event Data Updated:", eventData);
  };

  useEffect(() => {
    const isTenDigits = /^\d{10}$/.test(payoutDetails.account_number);
    const hasBankCode =
      payoutDetails.bank_code && payoutDetails.bank_code.trim() !== "";

    if (!isTenDigits) {
      // Clear account name if number is invalid
      setPayoutError("");
      onpayoutDetailsChange("account_name", "");
      return;
    }

    if (isTenDigits && hasBankCode) {
      const fetchAccountInfo = async () => {
        try {
          setLoading(true);

          const response = await sendRequest({
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/payouts/confirm-details?account_num=${payoutDetails.account_number}&bank_code=${payoutDetails.bank_code}`,
            method: "GET",
            headers: { Authorization: `Bearer ${user?.token}` },
          });

          if (response?.status === "success") {
            setPayoutError("");
            onpayoutDetailsChange("account_name", response.data.account_name);
          } else {
            onpayoutDetailsChange("account_name", "");
            setPayoutError("Account not found!");
          }
        } catch (error) {
          //console.error("Error verifying account:", error);
          onpayoutDetailsChange("account_name", "");
          setPayoutError("Account not found!");
        } finally {
          setLoading(false);
        }
      };

      fetchAccountInfo();
    }

    // Optional for debug:
    //console.log("Watching for account_number & bank_code changes");
    //console.log(payoutDetails, "Payout details updated");
  }, [
    payoutDetails.account_number,
    payoutDetails.bank_name,
    payoutDetails.bank_code,
    payoutDetails.account_name,
  ]);

  const savePayoutDetails = async () => {
    if (
      !payoutDetails.account_number ||
      payoutDetails.account_number.length !== 10 ||
      !payoutDetails.bank_code
    ) {
      alert("Please enter a valid 10-digit account number and select a bank.");
      setUpdatingWithdrwalDetails(false);
      return;
    }

    if (payoutError) { alert("Invalid credentials. Check bank name and account"); return}

    if (updatingWitdrawalDetails) return;

    try {
      setUpdatingWithdrwalDetails(true);

      const response = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/payouts`,
        method: "POST",
        headers: { Authorization: `Bearer ${user?.token}` },
        body: {
          account_name: payoutDetails.account_name,
          account_number: payoutDetails.account_number,
          bank_name: payoutDetails.bank_name,
          bank_code: payoutDetails.bank_code,
        },
      });

      if (response?.status === "success") {
        setInfo1("Withdrawal details updated");
        
        setUser({
          ...user,
          payoutDetails: response.data 
        })

        
        
        //console.log(user, "Payout update response");
        
        // Clear messages after 10 seconds
        setTimeout(() => {
          setInfo1(null);
        }, 10000);


      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error saving payout details:", error);
    } finally {
      setUpdatingWithdrwalDetails(false);
    }
  };

  const deletePayoutDetails = async () => {
  if (loading || isDeleting) return;

  if (!user?.payoutDetails?.id) {
    alert("No payout details found to delete.");
    return;
  }

  if (!user?.token) {
    alert("User not authenticated.");
    return;
  }

  try {
    setIsDeleting(true);

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/payouts/${user.payoutDetails.id}`;
    //console.log("delete url: ", url);

    const response = await sendRequest({
      url,
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` },
    });

    if (response?.status === "success") {
      setInfo1("Withdrawal details deleted");

      setUser({
        ...user,
        payoutDetails: {
          id: "",
          account_number: "",
          account_name: "",
          bank_name: "",
          recipient_code: "",
        },
      });

      setPayoutDetails({
    bank_id: "",
    bank_name: "",
    account_name: "",
    account_number: "",
    bank_code: "",
  })

  setDeletePopup(false);

      setTimeout(() => setInfo1(null), 10000);
      
    } else {
      //console.log(response);
      alert(response?.message || "Failed to delete payout details.");
    }
  } catch (error) {
    //console.error("Error deleting payout details:", error);
  } finally {
    setIsDeleting(false);
    
  }
};


  const handlePayoutDropdownChange = (value: string) => {
    onpayoutDetailsChange("bank_id", value);
    //console.log(bankList, "bank list");
    const selectedBank = (bankList as any[]).find((bank) => bank.id === value);
    //console.log(selectedBank, "selected bank");
    onpayoutDetailsChange("bank_code", selectedBank?.code || "");
    onpayoutDetailsChange("bank_name", selectedBank?.name || "");
    //console.log(payoutDetails)
  };

  const [preview1, setPreview1] = useState<string | null>(null);
  const [preview2, setPreview2] = useState<string | null>(null);
  const { profilePreview, setProfile } = useUser();

  

  const updateUser = async () => {
    if (loading) return;

    if (!image1) {
      alert("Please upload the front image of your identity card");
      return;
    }

    if (!image2) {
      alert("Please upload the back image of your identity card");
      return;
    }

    console.log("Updating user role to organizer...");

    try {
      const response = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${user.userId}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
        body: {
          role: "organizer",
        },
      });

      if (response.status !== "success") {
        alert(
          "An error occurred while updating your profile. Please try again."
        );
        return;
      }

      // Update role in context
      setRole("organizer");

      // Show success messages
      setInfo1("Upload successful!");
      setInfo2("You can now create events");

      // Clear messages after 5 seconds
      setTimeout(() => {
        setInfo1(null);
        setInfo2(null);
      }, 10000);

      //console.log("User updated successfully:", response.data);

      // Optionally redirect the user after delay
      // setTimeout(() => {
      //   router.push("/create-events");
      // }, 5500);

      return;
    } catch (error) {
      //console.error("Error updating user:", error);
      alert("An error occurred while updating your profile. Please try again.");
      return;
    }
  };

  const uploadImage = async () => {
    if (loading) return;
    if (!image1) {
      alert("Please upload the front image of your identity card");
      return;
    }

    if (!image2) {
      alert("Please upload the back image of your identity card");
      return;
    }

    // Rename the image before uploading
    const renamedImage1 = new File(
      [image1],
      `front-id-${user.userId}.${image1.name.split(".").pop()}`,
      {
        type: image1.type,
      }
    );

    // Rename the image before uploading
    const renamedImage2 = new File(
      [image2],
      `back-id-${user.userId}.${image2.name.split(".").pop()}`,
      {
        type: image2.type,
      }
    );

    try {
      // Create a FormData object to send the image file
      const formData1 = new FormData();
      formData1.append("files", renamedImage1); // Assuming `image` is a File object

      const formData2 = new FormData();
      formData1.append("files", renamedImage2);

      // Use the base URL from the environment variable
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!baseUrl) {
        throw new Error(
          "Base URL is not defined in the environment variables."
        );
      }

      //console.log("uploading image to:", `${baseUrl}/medias/upload`);
      //console.log(user, "user data");
      //console.log(user?.token, "user token");

      // Make the POST request to upload the image
      const response = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/medias/upload`,
        method: "POST",
        headers: {
          //"Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user?.token}`,
        },
        body: formData1,
      });

      //console.log(response, "response data");
      //console.log(response.status, "status");
      // Extract the URL from the response

      if (response.status !== "success")
        return alert("Failed to create event. Please try again.");
      const imageUrl = response.data.files[0].cloudinaryUrl; // Adjust this based on the actual response structure
      //console.log("Image uploaded successfully:", imageUrl);

      // Make the POST request to upload the image
      const response2 = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/medias/upload`,
        method: "POST",
        headers: {
          //"Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user?.token}`,
        },
        body: formData2,
      });

      if (response2.status !== "success")
        return alert("Failed to create event. Please try again.");
      const imageUrl2 = response.data.files[0].cloudinaryUrl;

      //console.log("Image2 uploaded successfully:", imageUrl2);

      return;
    } catch (error) {
      //console.error("Error verifying ID:", error);
      alert("Failed to create event. Please try again.");
      return;
    }
  };

  async function handleDocumentUpload() {
    try {
      // Wait for the image to be uploaded
      await uploadImage();

      // Navigate to the next page after the image is uploaded
      //router.push(`/my-events`);
    } catch (error) {
      /*console.error(
        "An error occurred while uploading your document. Please try again.",
        error
      );*/
      alert(
        "An error occurred while uploading your document. Please try again."
      );
    }
  }


  const approveWithdrawal = async () => {

    if (isWithdrawing) return;
    if (withdrawalAmount === null || withdrawalAmount <= 0) {
      alert("Please enter a valid withdrawal amount");
      return;
    }
        try {
          setIsWithdrawing(true);

          const response = await sendRequest({
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/withdraw`,
            method: "POST",
            headers: { Authorization: `Bearer ${user?.token}` },
            body: { amount: withdrawalAmount }
          });

          if (response?.success) {
            setInfo1("Transaction Successful!")

            setTimeout(() => {setInfo1(null)
      }, 5000);

          } else {
            //console.log(response, " - withdrawl error")
            alert("Withdrawal failed, please try again")
          }
        } catch (error) {
          //console.error("withdrawal failed: ", error);
          
        } finally {
          setIsWithdrawing(false);
        }
      };
  //const [profile, setProfile] = useState<File | null>(null);
  //const [profilePreview, setProfilePreview] = useState<string | null>(null);

  const handleLogout = async () => {
    if (loading) return; // Prevent multiple clicks
    //console.log("sending request");

    setLoading(true); // Set loading state

    try {
      const response = await sendRequest({
        url: `/api/auth/logout`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      //console.log("response: ", response);

      setUser({
        userId: null,
        name: null,
        email: null,
        role: null,
        picture: null,
        age: null,
        location: null,
        token: null,
      });
      localStorage.setItem("quiktis_user", JSON.stringify(user));
    } catch (error) {
      //console.log(error);
    } finally {
      setLoading(false); // Reset loading state
      router.push("/signin");
    }
  };

  return (
    <main className="flex flex-col gap-5 w-full relative min-h-screen sm:w-[88%] lg:w-[90%] mx-auto">
      <div className="flex md:flex-row flex-col gap-20 shrink-0 relative w-full justify-center items-center h-full">
        <Image
          src={"/502.png"}
          alt="502"
          width={369}
          height={300}
          className="absolute -z-50 -top-20"
        />
        <div className="w-full">
          <EventsOperations />

          <ProfileCard containerClass="mt-[1.78em]" />

          <Button
            onClick={() => router.push(`/create-events`)}
            className="flex justify-center gap-3 lg:hidden items-center w-full md:px-[1.4em] md:w-fit mt-5 py-3 shadow-xl shadow-[#ff4e2a42] bg-primary"
          >
            <Image src="/icons/event.svg" height={24} width={24} alt="icon" />
            <p className="my-auto">Create Event</p>
          </Button>
        </div>
      </div>
      <section className="mt-[3em]">
        <h2 className="max-md:text-[1.3em] text-[2em] font-medium mb-[1em]">
          Profile Settings
        </h2>
        <div className="grid max-sm:grid-cols-[3.5em_auto] grid-cols-[6em_auto] my-auto gap-[0.8em] w-fit h-fit z-0">
          <div
            style={{ zIndex: "-10 !important" }}
            className={`grid place-items-center border-2 border-white rounded-full max-sm:w-[3em] max-md:h-[3em] w-[5em] h-[5em] mx-auto sm:mx-0 overflow-hidden`}
          >
            <Image
              src={profilePreview ?? "/person.svg"}
              alt="profile picture"
              width={100}
              height={100}
              className={`rounded-full  object-cover max-md:w-[3em] max-md:h-[3em]   text-white ${
                profilePreview
                  ? " w-[5em] h-[5em]"
                  : "w-[2.5em] h-[2.5em]  max-md:w-[1.5em] max-md:h-[1.5em]"
              }`}
            />
          </div>
          <div className="h-fit my-auto">
            <div className="flex max-md:gap-3 gap-[3em] justify-between ">
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold w-fit">
                  {/*Jaxson Siphron*/ user.name}
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm w-fit">
                  {/*Jaxsonsiphron@gmail.com*/ user.email}
                </p>
              </div>
              <hr className="my-4 border-gray-400 mt-3"></hr>
            </div>
          </div>
        </div>

        <div className="max-md:w-full my-4 mt-[3em] w-[65%] flex flex-col max-sm:gap-8 gap-[3em]">
          <div className="flex flex-col lg:grid grid-cols-2 max-sm:gap-8 gap-5">
            <InputField label="First Name" />
            <InputField label="Last Name" />
          </div>
          <div className="flex flex-col lg:grid grid-cols-[auto_16em] max-sm:gap-8 gap-5">
            <InputField label="Email" />
            <Button className="grid items-center bg-primary">
              Update Email Address{" "}
            </Button>
          </div>
          <div className="flex flex-col lg:grid grid-cols-[auto_16em] max-sm:gap-8 gap-5">
            <InputField label="Wallet address" />
            <Button className="grid items-center bg-primary">
              Connect Wallet{" "}
            </Button>
          </div>
        </div>
      </section>

      <section id="verify" className="pb-5"></section>

      {user.role === "user" && (
        <section className="space-y-[5em] my-[2em]">
          <div className="max-md:w-full w-[65%]">
            <div className="space-y-10">
              <Label className="mb-[2.4em]" required={true}>
                Complete your profile to create an event
              </Label>
              <Dropdown
                label="Identity Card"
                options={[
                  { id: "nin", name: "National ID (NIN)", description: "" },
                  {
                    id: "drivers_license",
                    name: "Driver's License",
                    description: "",
                  },
                  {
                    id: "passport",
                    name: "International Passport",
                    description: "",
                  },
                ]}
                placeholder="Card type"
              />

              <div className="space-y-2 mb-[4em]">
                <Label>Front Picture</Label>
                <ImageUploader
                  containerClass="py-[3.5em] border-primary rounded-[1.4em] hover:border-white"
                  label={
                    <div className="space-y-6 grid items-center">
                      <div className="w-fit mx-auto px-4 py-2 bg-primary rounded-md shadow-md">
                        Browse Files
                      </div>
                      <div className="text-center">
                        <p className="max-sm:text-sm max-sm:w-[70%] mx-auto">
                          🗂 Drag & drop identity card or Business Card here
                        </p>
                        <p className="text-sm text-gray-500 mx-auto max-sm:mt-[1.4em]">
                          Supported format: JPEG, JPG, PNG, Max size: 50MB
                        </p>
                      </div>
                    </div>
                  }
                  preview={preview1}
                  setPreview={setPreview1}
                  setImage={setImage1} // Add the correct image setter
                />
              </div>

              <div className="space-y-2">
                <Label>Back Picture</Label>
                <ImageUploader
                  containerClass="py-[3.5em] border-primary rounded-[1.4em] hover:border-white"
                  label={
                    <div className="space-y-6 grid items-center">
                      <div className="w-fit mx-auto px-4 py-2 bg-primary rounded-md shadow-md">
                        Browse Files
                      </div>
                      <div className="text-center">
                        <p className="max-sm:text-sm max-sm:w-[70%] mx-auto ">
                          🗂 Drag & drop identity card or Business Card here
                        </p>
                        <p className="text-sm text-gray-500 max-sm:mt-[1.4em]">
                          Supported format: JPEG, JPG, PNG, Max size: 50MB
                        </p>
                      </div>
                    </div>
                  }
                  preview={preview2}
                  setPreview={setPreview2}
                  setImage={setImage2} // Add the correct image setter
                />
              </div>

              <div className="my-[2em]">
                <Button
                  onClick={updateUser}
                  className="flex justify-center gap-3 items-center w-full md:px-[1.4em] md:w-fit mt-5 py-3 max-sm:w-fit bg-primary"
                >
                  <p className="my-auto ">Submit</p>
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>

          <hr className=" border-gray-600"></hr>
        </section>
      )}

      <section>
        <div>
          <div className="max-md:w-full gap-2 flex flex-col w-[65%]">
            <Label required={true}>Bio</Label>
            <textarea
              name="description"
              //value={eventData.description}
              //onChange={handleInputChange}
              placeholder="Give a little description of yourself, lifestyle, whatever stands out in you"
              rows={6}
              className="p-5 bg-inherit border border-[#ffffff4f] rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
              //value={eventData.description}
              //onChange={handleInputChange}
              //required
            />
          </div>
        </div>
      </section>

      
      {user.payoutDetails?.account_number && <section className="mt-[3em]">
        <h2 className="max-md:text-[1.3em] text-[2em] font-medium">
          Withdrawal
        </h2>


        <div className="max-md:w-full my-4 mt-[2em] w-[65%] flex flex-col max-sm:gap-8 gap-[3em]">
          
          <div className="flex flex-col lg:grid grid-cols-[auto_18em] max-sm:gap-8 gap-5">
            <div>
              <InputField
                label="Ammount"
                value={withdrawalAmount || null}
                type="number"
                onChange={(e) => e.target.value ? setWithdrawalAmount(Number(e.target.value)) : setWithdrawalAmount(null)}
                placeholder="Enter amount to withdraw"
              />
              {payoutError && (
                <p className="mt-2 text-[0.95em] text-red-500">{payoutError}</p>
              )}
            </div>

              
            <Button
              className=" bg-primary h-fit py-3"
              onClick={approveWithdrawal}
              loading={isWithdrawing}
              loaderClass="mt-[0.16em] ml-[-0.005em]"
            >
              Approve{" "}
            </Button>
          </div>
        </div>
      </section>}

      {user.role === "organizer" && <section className="mt-[3em]">
        <h2 className="max-md:text-[1.3em] text-[2em] font-medium">
          Withdrawal Settings
        </h2>


        <div className="max-md:w-full my-4 mt-[2em] w-[65%] flex flex-col max-sm:gap-8 gap-[3em]">
          <div className="flex flex-col lg:grid grid-cols-2 max-sm:gap-8 gap-5">
            <Dropdown
              options={bankList}
              label="Bank Name"
              selected={payoutDetails.bank_id || ""}
              //selected={eventData.category}
              onChange={handlePayoutDropdownChange}
              onOpen={fetchBanks}
              //placeholder="Bank Name"
            />
            <InputField
              value={payoutDetails.account_number}
              onChange={(e) =>
                onpayoutDetailsChange("account_number", e.target.value)
              }
              label="Account Number"
              type="number"
            />
          </div>
          <div className="flex flex-col lg:grid grid-cols-[auto_18em] max-sm:gap-8 gap-5">
            <div>
              <InputField
                label="Account Name"
                value={payoutDetails.account_name}
                isDisabled={true}
              />
              {payoutError && (
                <p className="mt-2 text-[0.95em] text-red-500">{payoutError}</p>
              )}
            </div>

              
            <Button
              className=" bg-primary h-fit py-3"
              onClick={savePayoutDetails}
              loading={updatingWitdrawalDetails}
              loaderClass="mt-[0.16em] ml-[-0.005em]"
            >
              Save withdrawal details{" "}
            </Button>
          </div>
          <button className="py-3 border gap-1 border-gray-400 text-gray-400 px-6 h-fit w-fit md:mt-[-1.5em] rounded-md hover:border-primary transition hover:text-primary flex justify-center items-center" onClick={() => setDeletePopup(true)}><MdClear size={20}/>Delete</button>
        </div>
      </section>}
      

      <div className="max-md:w-full space-y-7 w-[65%] mt-[1.5em]">
        <h2 className="max-md:text-[1.3em] text-[2em] font-medium">
          Privacy Setting
        </h2>
        <div className="flex my-2 gap-3">
          <input type="checkbox" />
          <label className="text-[1.1em]">
            Show my email address on my profile
          </label>
        </div>
        <div className="flex my-2 gap-3">
          <input type="checkbox" />
          <label className="text-[1.1em]">Show my birthday on my profile</label>
        </div>
        <div className="flex my-2 gap-3 w-fit md:mr-0 md:ml-auto">
          <Button className="px-[3em] bg-primary">Save</Button>
          <button className="px-[3em] border border-primary rounded-md">
            Cancel
          </button>
        </div>
      </div>

      <div className="my-[2em]">
        <Button
          onClick={handleLogout}
          className="flex justify-center gap-3 items-center w-full md:px-[1.4em] md:w-fit mt-5 py-3 max-sm:w-fit bg-primary"
        >
          <p className="my-auto ">Log out</p>
          <FaArrowRight />
        </Button>
      </div>

      {/*<CreateEventForm/>*/}
      {/*<div className=" flex flex-wrap gap-3 relative w-full mt-[5em]">
        {images.map((image, index) => (
          <div key={index} className="w-[19%]">
            <Image
              src={image.image}
              alt={image.image}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>*/}
      {/*<Statistics/>
            <Image
            src={'/chart.png'}
            alt='chart'
            width={1448}
            height={600}
            className='mt-10'
            />*/}

      <div className="fixed flex flex-col gap-4 right-[2em] bottom-[2em] z-[1000]">
        {info1 && (
          <div className="flex gap-2 z-[1000] bg-[#181818]  border rounded-md  border-primary w-[20em] h-fit py-4 px-7 ">
            <span className="bg-primary h-[24px] w-[24px] rounded-full grid place-items-center my-auto">
              <TiTick className="my-auto" color="black" size={20} />
            </span>{" "}
            <span className="my-auto">{info1}</span>
          </div>
        )}
        {info2 && (
          <div className="flex gap-2 z-[1000] bg-[#181818]  border rounded-md  border-primary w-[20em] h-fit py-4 px-7 ">
            <span className="bg-primary h-[24px] w-[24px] rounded-full grid place-items-center my-auto">
              <TiTick className="my-auto" color="black" size={20} />
            </span>{" "}
            <span className="my-auto">{info2}</span>
          </div>
        )}
      </div>

      {deletePopup && <>
      <div className="fixed w-full top-0 bottom-0 right-0 left-0 bg-black opacity-50 z-[100]"></div>
      <div className="grid place-items-center fixed w-full top-0 bottom-0 right-0 left-0 z-[100]">
        <div className="bg-[#131313] border border-[#ffffff65] h-fit w-fit px-8 py-9  rounded-md space-y-7 max-sm:w-[90%] ">
          <p>Are you sure you want to delete your details?</p>
          <div className="grid grid-cols-2 gap-5 w-full">
            <Button loading={isDeleting} loaderClass="mt-[0.16em] ml-[-0.005em]" className="font-medium px-3 py-2 rounded-md h-fit bg-primary hover:scale-[1.04] transition" onClick={deletePayoutDetails}>Yes</Button>
            <button className="font-medium border px-3 py-2 rounded-md border-[#ffffff65] hover:bg-[#ffffff1a] hover:scale-[1.04] transition" onClick={() => (setDeletePopup(false))}>No</button>
          </div>
        </div>
      </div></>
}
    </main>
  );
};

export default CreateEvent;
