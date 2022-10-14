import {
	Alert,
	AlertIcon,
	Box,
	Container,
	Heading,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { Containers } from "../Components";

const Terms = () => {
	return (
		<>
			<Containers>
				<VStack alignItems={"center"} justifyContent="center">
					<Container maxW={["6xl"]}>
						<Box textAlign={"center"} className="section-padding">
							<Heading fontSize={"26px"} mb="3rem">
								دفتر المواصفات والاشتراطات لبيع وحدة سكنية يصل فيها السداد لعشر
								سنوات
							</Heading>
							<Box as="ul">
								<li>
									بيع وحدة سكنية بمدينة طوخ محافظة القليوبية ضمن الحيز العمراني
									والكتلة السكنية عن طريق المزايدة الالكترونية
								</li>
								<li>
									<a
										href="https://www.google.com/maps/place/30%C2%B021'04.2%22N+31%C2%B012'27.6%22E/@30.351155,31.2082132,186m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x33fe67b8ee5620!7e2!8m2!3d30.3511548!4d31.2076663?hl=ar"
										target="_blank"
										rel="noreferrer"
									>
										العنوان :شارع الشيخ زايد - طوخ – شرق السريع العنوان على جوجل
									</a>
								</li>
								<li>
									شقة غربي قبلي وشقة قبلي وصفهم بطابق واحد كل شقة بمساحة 90 متر
									تقريبا بجميع المنافع تزيد او تنقص قليلا والعنوان مكتوب سابقا
									لمعاينة مكان الانشاء
								</li>
								<li>تتكون كل شقة من ثلاث غرف وصالة ومطبخ وحمام</li>
								<li>
									يتم المزايدة غلى كل شقة على حدة بالمبلغ المحدد لبداية المزايدة
									لكل شقة بحيث ان مبلغ بداية المزايدة للشقة القبلية50000 خمسون
									ألف جنيها يبدا بها المزاد حتى الوصول للسعر العادل لها وقت
									المزايدة والشقة الغربية القبلية 65000 خمسة وستون ألف جنيه
									لبداية المزايدة عليها حتى الوصول للسعر العادل لها وقت المزايدة
								</li>
								<li>
									الحصول غلى الرقم الكودي لكراسة الشروط مهم جدا لإكمال البيانات
									وتسهيل باقي إجراءات المزايدة لأنه لا يمكن المزايدة والاشتراك
									بها الا بعد الحصول على الرقم الكودي لكراسة الشروط
								</li>
								<li>
									لدخول المزايدة يجب سداد مبلغ رسوم دخول المزايدة مصروفات إدارية
									لا ترد بمبلغ 165 جنيه مصري وذلك على رقم الحساب المذكور في
									بيانات ومعلومات المزايدة بالموقع الالكتروني
								</li>
								<li>
									في حالة رسو المزاد (طريقة الدفع وتخليص الإجراءات للمزايدة )يتم
									دفع 40% من قيمة الوحدة نقدا او بشيك في خلال 48 ساعة من رسو
									المزاد والا تسقط الاحقية في اكمال الإجراءات ويسقط الحق في رسو
									المزايدة عليك ويتم خصم كامل قيمة التامين وفي حالة الدفع بقيمة
									40% من اجمالي قيمة المزايدة يتم ابرام عقد الاتفاق بالبيغ
									بالشروط الاتية
									<ul className="first">
										<li>
											تحديد وقت الاستلام وهي مدة ثلاث سنوات كحد اقصى من تاريخ
											التعاقد الا في الاحداث القهرية والاستثنائية والخارجة عن
											الارادة
										</li>
										<li>
											تحديد مواعيد تسديد باقي القيمة خلال سنة واحدة مجانية بدون
											اي عمولات او فوائد وما زاد عن تلك المدة سيتم تحديد قيمة
											اقتصادية طبقا للفائدة المعمول بها في البنوك المصرية وذلك
											بالاتفاق على المدة وتحديدها لمدة تصل لعشر سنوات طبقا لما
											يتم الاتفاق عليه
										</li>
										<li>
											الشقة يتم تسليمها خلال المدة المحددة إذا لم يحدث حدث خارج
											عن ارادة او السيطرة ويتم تسليم بعد انتهاء الحدث ويكون
											تسليم الشقة نصف تشطيب ويحق للعميل بيعها للغير بالاتفاق
											معنا بعقد جديد من خلالنا
										</li>
									</ul>
								</li>
								<li>
									يقوم العميل بدفع جميع الرسوم والضرائب العقارية لإجمالي قيمة
									الشقة التي انتهت عندها المزايدة لإتمام إجراءات التسجيل لتسليم
									الشقة
								</li>
								<li>
									في حالة نجاح المزايدة الاولى للدور الاول علوي والوصول للسعر
									العادل لكل شقة سوف تتوالى المزايدات غلى باقي الادوار للعمارة
									السكنية وسوف يتم تحديد مواعيد المزايدات بمقدار مزايدة واحدة كل
									شهرين حتى انتهاء الوحدات ويكون لكل مزايدة تامين منفصل عن الذي
									قبله
								</li>
								<li>مرفق مع الشروط والمواصفات</li>
								<li>صورة الرسم الهندسي للمبنى كامل</li>
								<li>صورة الرسم الهندسي للشقة الغربية والقبلية</li>
								<li>
									<a
										href="https://www.google.com/maps/place/30%C2%B021'04.2%22N+31%C2%B012'27.6%22E/@30.351155,31.2082132,186m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x33fe67b8ee5620!7e2!8m2!3d30.3511548!4d31.2076663?hl=ar"
										target="_blank"
										rel="noreferrer"
									>
										العنوان للمعاينة شارع الشيخ زايد - طوخ - منطقة سكنية شرق
										السريع و العنوان من جوجل
									</a>
									<br />
									واتساب 01005616519
								</li>
								<li>
									الحصول على كراسات الشروط والكود حتى 31 ديسمبر 2022 ويكون لمرة
									واحدة لكل الوحدات
									<ul className="first">
										<li>
											دفع رسوم لدخول المزايدة الاولى للدور الاول حتى 31 ديسمبر
											2022
										</li>
										<li>
											تاريخ المزايدة الاولى تبدأ من 1/1/2023 الساعة الثامنة
											صباحا وتنتهي يوم 5/1/2023 الساعة الثامنة مساء ويتم الاعلان
											عن رسو المزايدة للدور الاول علوي يوم 6/1/2023 او الغائها
											وفي حالة الغائها لاي سبب من الاسباب منها عدم الوصول للسعر
											العادل للوحدة السكنية او عدم وجود العدد المطلوب من
											المزايدين يتم تحديد موعد اخر او الغاء المزايدة نهائيا لعدم
											الوصول للسعر العادل
										</li>
									</ul>
								</li>
							</Box>
							<Alert status="info">
								<AlertIcon />
								<Text color={"black"} fontSize={["md", "lg", "xl"]}>
									يرجي التسجيل للحصول علي كراسة الشروط بالكود الخاص بكم ومستند
									صورة الرخصه وذلك بالتسجيل ودفع الرسوم وان كراسة الشروط بدون
									الكود الخاص بكم غير معترف بيها
								</Text>
							</Alert>
							<Box className="Grid">
								<img
									src="https://raw.githubusercontent.com/MahmoudSaber1/Terms/master/ph2.png"
									alt=""
								/>
								<img
									src="https://raw.githubusercontent.com/MahmoudSaber1/Terms/master/ph3.png"
									alt=""
								/>
							</Box>
						</Box>
					</Container>
				</VStack>
			</Containers>
		</>
	);
};

export default Terms;