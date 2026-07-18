import {
    Box,
    Button,
    Container,
    Typography,
} from "@mui/material";

import useCart from "../context/useCart";
import { Link } from "react-router-dom";

export default function Cart() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Box
            sx={{
                py: 8,
                bgcolor: "#FAF9F6",
                minHeight: "80vh",
            }}
        >
            <Container maxWidth="md">
                <Typography
                    sx={{
                        fontFamily: "Cormorant Garamond",
                        fontSize: 52,
                        mb: 5,
                    }}
                >
                    Shopping Bag
                </Typography>

                {cartItems.length === 0 ? (
                    <Box
                        sx={{
                            py: 8,
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 26,
                                fontWeight: 600,
                                mb: 1,
                            }}
                        >
                            Your shopping bag is empty
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{ mb: 4 }}
                        >
                            Discover timeless luxury pieces curated just for you.
                        </Typography>

                        <Button
                            component={Link}
                            to="/shop"
                            variant="contained"
                            sx={{
                                bgcolor: "#111",
                                borderRadius: 0,

                                "&:hover": {
                                    bgcolor: "#222",
                                },
                            }}
                        >
                            Continue Shopping
                        </Button>
                    </Box>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    display: "flex",
                                    gap: 3,
                                    py: 3,
                                    alignItems: "center",
                                    borderBottom: "1px solid #ECE8E2",
                                }}
                            >

                                <Box
                                    component="img"
                                    src={item.image}
                                    alt={item.name}
                                    sx={{
                                        width: 90,
                                        height: 110,
                                        objectFit: "cover",
                                        borderRadius: 1,
                                        border: "1px solid #ECE8E2",
                                    }}
                                />

                                <Box sx={{ flex: 1 }}>

                                    <Typography fontWeight={600}>
                                        {item.name}
                                    </Typography>

                                    <Typography sx={{ mt: 1 }}>
                                        ₹{item.price.toLocaleString("en-IN")}
                                    </Typography>

                                    <Typography sx={{ mt: 1 }}>
                                        Quantity × {item.quantity}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            mt: 2,
                                        }}
                                    >
                                        <Button
                                            variant="outlined"
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                        >
                                            -
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            onClick={() =>
                                                increaseQuantity(item.id)
                                            }
                                        >
                                            +
                                        </Button>

                                        <Button
                                            variant="text"
                                            color="error"
                                            sx={{
                                                textTransform: "none",
                                            }}
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >
                                            Remove
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        ))}

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mt: 5,
                                pt: 3,
                                borderTop: "1px solid #ECE8E2",
                            }}
                        >
                            <Typography fontWeight={700}>
                                Total
                            </Typography>

                            <Typography fontWeight={700}>
                                ₹{total.toLocaleString("en-IN")}
                            </Typography>
                        </Box>

                        <Button
                            component={Link}
                            to="/checkout"
                            variant="contained"
                            sx={{
                                mt: 4,
                                bgcolor: "#111",
                                borderRadius: 0,

                                "&:hover": {
                                    bgcolor: "#222",
                                },
                            }}
                        >
                            Proceed to Checkout
                        </Button>
                    </>
                )}
            </Container>
        </Box>
    );
}