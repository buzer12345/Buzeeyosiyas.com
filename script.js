import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("wellcom.html")
public class SignupController {

    @PostMapping
    public String handleSignup(@RequestParam Map<String, String> formData) {
        // Extract form data
        String firstName = formData.get("firstName");
        String middleName = formData.get("middleName");
        String lastName = formData.get("lastName");
        String dob = formData.get("dob");
        String email = formData.get("email");
        String password = formData.get("password");
        String phoneNumber = formData.get("phoneNumber");

        // Save the user data (this is a placeholder)
        return "User " + firstName + " " + lastName + " signed up successfully!";
    }
}